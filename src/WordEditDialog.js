vex.defaultOptions =  {
	content: '',
	unsafeContent: '',
	showCloseButton: true,
	escapeButtonCloses: true,
	overlayClosesOnClick: true,
	appendLocation: 'body',
	className: 'vex-theme-custom',
	overlayClassName: 'vex-overlay-reset',
	contentClassName: 'vex-content-reset',
	closeClassName: '',
	closeAllOnPopState: true
}

WordEditDialog =
{
	// config: { word: word, match: match }
	open: async function(config)
	{
		var options = await (new OptionsManager()).getOptions();
		var globalOptions = await (new OptionsManager()).getGlobalOptions();

		return new Promise(
			resolve =>
			{
				vex.dialog.open({
					input: WordEditDialog.generateDialogHTML(
						{
							word: config.word,
							match: config.match,
							lookupURL: options.lookupURL,
							language: globalOptions.language
						}
					),
					callback: resolve
				});
				if (config.match)
				{
					var textBox = document.querySelector(".vex-content input[name=\"definition\"");
					textBox.select();
				}
				document.querySelector(".vex-content a.lookup").addEventListener("click",
					function(e)
					{
						document.querySelector(".vex-content input[name=\"definition\"").focus();
					}
				);
			}
		);
	},

	generateDialogHTML: function(config)
	{
		var word      = config.word;
		var match     = config.match;
		var lookupURL = config.lookupURL;
		var language  = config.language;

		const strings = WordologyStrings.getStrings(language);

		if (match)
		{
			var suggestion = match.entry.definition;

			if (!match.exact)
			{
				let matchingWord = match.entry.word;
				var suggestionNote = `
					<span class=\"suggestionNote\">${strings.TRANSLATION_SUGGESTED(matchingWord)}</span>
				`;
			}
			else
			{
				suggestionNote = "";
			}
		}
		else
		{
			suggestion = "";
			suggestionNote = "";
		}

		if (lookupURL)
		{
			let url = lookupURL.replace("$", word);
			var lookupLink = `<a class="lookup" target="_blank" href="${url}">Look up</a>`;
		}
		else
		{
			lookupLink = "";
		}

		return `
			<span class="word">${word}</span>
			<label for="definition">Translation:</label>
			<input type="text" name="definition" autocomplete="off" value="${suggestion}" />
			${suggestionNote}
			${suggestionNote && lookupLink ? "<br />" : ""}
			${lookupLink}
			<input type="hidden" name="word" value="${word}" />
		`;
	}
};
