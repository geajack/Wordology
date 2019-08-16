importScripts("wordmatching.js");

if (self)
{
	self.onmessage = function(e)
	{
		var arguments = e.data;
		RunWorker(arguments);
	};
}

function RunWorker(arguments)
{
	var requestedWords    = arguments.requestedWords;
	var options           = arguments.options;
	var dictionaryEntries = arguments.dictionaryEntries;

	var dictOfMatches = WordMatching.MatchWords(requestedWords, dictionaryEntries, options);

	postMessage(dictOfMatches);
}
