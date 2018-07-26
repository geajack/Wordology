(function ContentScript()
{
	var ALPHABET = "A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u00FF\\u0100-\\u017F\\u0180-\\u024F\\u0400-\\u04FF";
	var DF = new DictionaryFetcherPage("DictionaryFetcher");
	var WM = new WordManager();
	var TM = new ToggleManagerPage("ToggleManager",
		{
			onFirstOn   : init,
			onToggleOn  : () => WM.show(),
			onToggleOff : () => WM.hide()
		}
	);
	var options;
	
	async function init()
	{
		options = await (new OptionsManager()).getOptions();
		
		document.querySelector(":root").style.setProperty(
			"--wordology-not-defined-color",
			cssStringFromHex(options.notDefinedColor, 0.35)
		);
		document.querySelector(":root").style.setProperty(
			"--wordology-defined-color",
			cssStringFromHex(options.definedColor, 0.35)
		);
		document.querySelector(":root").style.setProperty(
			"--wordology-similar-color",
			cssStringFromHex(options.similarColor, 0.35)
		);
		
		WM.processNode(document, ALPHABET);
		var listOfWordsOnPage = WM.getWords();
		
		var dictionaryFetcherRequest =
			{
				words   : listOfWordsOnPage,
				options : options
			};
		var dictOfMatches = await DF.getMatches(dictionaryFetcherRequest);
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
	
	function cssStringFromHex(hexstring, opacity)
	{
		var red   = parseInt(hexstring.substring(1, 3), 16);
		var green = parseInt(hexstring.substring(3, 5), 16);
		var blue  = parseInt(hexstring.substring(5, 7), 16);
		return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
	}
})();
