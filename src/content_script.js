(function ContentScript()
{
	const LATIN_EXTENDED = "A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u00FF\\u0100-\\u017F\\u0180-\\u024F";
	const CYRILLIC = "\\u0400-\\u04FF";
	const GREEK = "\\u0370-\\u03FF";
	const KOREAN = "\\u3131-\\uD79D";
	const ALPHABET = LATIN_EXTENDED + CYRILLIC + GREEK + KOREAN;

	var loggedIn = true;

	var DF = new DictionaryFetcherPage("DictionaryFetcher");
	var WM = null;
	var TM = new ToggleManagerPage("ToggleManager",
		{
			onFirstOn             : init,
			onToggleOn            : () => WM.show(),
			onToggleOff           : () => WM.hide(),
			onLoggedOut           : () => { loggedIn = false; WM.hide(); },
			onLoggedOutPress      : showLoggedOutPopup,
			onChangedProfile      : () => { loggedIn = false; WM.hide(); },
			onChangedProfilePress : showChangedProfilePopup
		}
	);
	var options;

	async function init()
	{
		options = await (new OptionsManager()).getOptions();

		WM = new WordManager(ALPHABET + options.separatorCharacters);

		document.querySelector(":root").style.setProperty(
			"--wordology-not-defined-color",
			cssStringFromHex(options.notDefinedColor, options.notDefinedOpacity/100)
		);
		document.querySelector(":root").style.setProperty(
			"--wordology-defined-color",
			cssStringFromHex(options.definedColor, options.definedOpacity/100)
		);
		document.querySelector(":root").style.setProperty(
			"--wordology-similar-color",
			cssStringFromHex(options.similarColor, options.similarOpacity/100)
		);

		if (!loggedIn)
		{
			return;
		}

		WM.processNode(document);
		var listOfWordsOnPage = WM.getWords();

		var dictionaryFetcherRequest =
			{
				words   : listOfWordsOnPage,
				options : options
			};
		var dictOfMatches = await DF.getMatches(dictionaryFetcherRequest);
		if (dictOfMatches === null)
		{
			WM.hide();
			let language = (await (new OptionsManager().getGlobalOptions())).language;
			vex.dialog.alert(
				{
					unsafeMessage: WordologyStrings.getStrings(language).DATABASE_ERROR
				}
			);
			return;
		}

		if (!loggedIn)
		{
			WM.hide();
			return;
		}

		WM.setData(dictOfMatches);

		for (var wordElement of WM.getWordElements())
		{
			wordElement.click.addListener(onClickWord);
			wordElement.mouseOver.addListener(onMouseOverWord);
			wordElement.mouseOut.addListener(onMouseOutWord);
		}
	}

	function onMouseOverWord(e)
	{
		if (e.target.match)
		{
			e.target.showPopup();
		}
	}

	function onMouseOutWord(e)
	{
		e.target.hidePopup();
	}

	async function onClickWord(e)
	{
		var wordElement = e.target;

		if (window.getSelection().toString().length === 0)
		{
			e.domEvent.preventDefault();
			e.domEvent.stopPropagation();

			var userResponse = await WordEditDialog.open(
				{
					word: wordElement.getWord(),
					match: wordElement.getMatch()
				}
			);

			if (userResponse.definition)
			{
				WM.updateDefinition(wordElement.getWord(), userResponse.definition, options);
				var entry = {word: wordElement.getWord(), definition: userResponse.definition};
				DF.setData([entry]);
			}
		}
	}

	async function showLoggedOutPopup()
	{
		let options = await (new OptionsManager()).getGlobalOptions();
		const strings = WordologyStrings.getStrings(options.language);
		message = strings.LOGGED_OUT;
		vex.dialog.buttons.YES.text = strings.OK;
        vex.dialog.buttons.NO.text = strings.CANCEL;
		vex.dialog.open({
			input: message
		});
	}

	async function showChangedProfilePopup()
	{
		let options = await (new OptionsManager()).getGlobalOptions();
		const strings = WordologyStrings.getStrings(options.language);
		message = strings.CHANGED_PROFILE;
		vex.dialog.buttons.YES.text = strings.OK;
        vex.dialog.buttons.NO.text = strings.CANCEL;
		vex.dialog.open({
			input: message
		});
	}

	function cssStringFromHex(hexstring, opacity)
	{
		var red   = parseInt(hexstring.substring(1, 3), 16);
		var green = parseInt(hexstring.substring(3, 5), 16);
		var blue  = parseInt(hexstring.substring(5, 7), 16);
		return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
	}
})();
