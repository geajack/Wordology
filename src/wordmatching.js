const WordMatching =
{
	UpdateUndefinedWords: function UpdateUndefinedWords(undefinedWords, newEntry, options)
	{
		options.useInflection = true;

		var dictOfMatches = {};
		for (var word of undefinedWords)
		{
			var dictionaryTree = WordMatching.BuildTree([newEntry]);
			var maybeMatch = WordMatching.FindBestMatch(word, dictionaryTree, options);
			if (maybeMatch !== null)
			{
				dictOfMatches[word] = maybeMatch;
			}
		}
		return dictOfMatches;
	},

	UpdateMatchedWords: function UpdateMatchedWords(taggedMatches, newEntry, options)
	{
		options.useInflection = true;

		var dictOfMatches = {};
		for (var match of taggedMatches)
		{
			var oldMatchedWord = match.word;
			var dictionaryTree = WordMatching.BuildTree([match.entry, newEntry]);
			var bestMatch = WordMatching.FindBestMatch(oldMatchedWord, dictionaryTree, options);
			if (bestMatch !== null)
			{
				dictOfMatches[oldMatchedWord] = bestMatch;
			}
		}
		return dictOfMatches;
	},

	MatchWords: function MatchWords(listOfWords, listOfEntries, options)
	{
		var dictionaryTree = WordMatching.BuildTree(listOfEntries);
		var dictOfMatches = {};
		var alreadyEncounteredWords = [];

		for (var word of listOfWords)
		{
			if (! alreadyEncounteredWords.includes(word))
			{
				var bestMatch = WordMatching.FindBestMatch(
					word,
					dictionaryTree,
					options
				);
				if (bestMatch)
				{
					dictOfMatches[word] = bestMatch;
				}

				alreadyEncounteredWords.push(word);
			}
		}
		return dictOfMatches;
	},

	FindBestMatch: function FindBestMatch(wordToMatch, tree, options)
	{
		var minPrefixLength     = options.minPrefixLength;
		var blacklistedPrefixes = options.blacklistedPrefixes;
		var whitelistedSuffixes = options.whitelistedSuffixes;
		var maxSuffixLength     = options.maxSuffixLength;
		var useInflection       = options.useInflection;

		var currentBranch = tree;
		var truePrefixLength = 0;
		var currentWord = "";

		for (var i = 0; i < wordToMatch.length; i++)
		{
			let c = wordToMatch[i];
			currentWord += c;

			if (blacklistedPrefixes.includes(currentWord))
			{
				truePrefixLength = 0;
			}

			if (currentBranch[c] !== undefined)
			{
				currentBranch = currentBranch[c];
				truePrefixLength += 1;
			}
			else
			{
				break;
			}
		}

		var nCharactersTraversed = i;

		if (nCharactersTraversed == wordToMatch.length && currentBranch.entry)
		{
			return { entry: currentBranch.entry, exact: true };
		}
		else if (truePrefixLength >= minPrefixLength)
		{
			if (useInflection)
			{
				let remainingSuffix = wordToMatch.substring(nCharactersTraversed);
				let trueSuffixLength = WordMatching.LongestTrueSuffixLength(remainingSuffix, whitelistedSuffixes);
				if (trueSuffixLength <= maxSuffixLength)
				{
					return WordMatching.FindBestMatchFromSuffixTree(currentBranch, nCharactersTraversed, options);
				}
				else
				{
					return null;
				}
			}
			else
			{
				return null;
			}
		}
		else
		{
			return null;
		}
	},

	FindBestMatchFromSuffixTree: function FindBestMatchFromSuffixTree(tree, prefixLength, options)
	{
		var whitelistedSuffixes = options.whitelistedSuffixes;
		var maxSuffixLength     = options.maxSuffixLength;

		var frontier = [tree];
		var nextFrontier = [];
		var frontierExpanded = true;
		var minLength = null;
		var bestMatchEntry = null;
		while (frontierExpanded)
		{
			frontierExpanded = false;
			for (let node of frontier)
			{
				for (let key in node)
				{
					if (key == "entry")
					{
						let suffix = node.entry.word.substring(prefixLength);
						let length = WordMatching.LongestTrueSuffixLength(suffix, whitelistedSuffixes);
						if (minLength === null || length < minLength)
						{
							minLength = length;
							bestMatchEntry = node.entry;
						}
					}
					else
					{
						nextFrontier.push(node[key]);
						frontierExpanded = true;
					}
				}
			}
			frontier = nextFrontier;
			nextFrontier = [];
		}
		if (minLength <= maxSuffixLength)
			return {entry: bestMatchEntry, exact: false};
		else
			return null;
	},

	LongestTrueSuffixLength: function LongestTrueSuffixLength(word, whitelist)
	{
		var suffix = "";
		var length = 0;
		for (var i = word.length - 1; i >= 0; i--)
		{
			let suffix = word.substring(i);
			length += 1;
			if (whitelist.includes(suffix))
			{
				length = 0;
			}
		}
		return length;
	},

	BuildTree: function BuildTree(listOfEntries)
	{
		var tree = {};

		for (let entry of listOfEntries)
		{
			let currentBranch = tree;
			let word = entry.word;

			for (let i = 0; i < word.length; i++)
			{
				let c = word[i];
				if (currentBranch[c] === undefined)
				{
					currentBranch[c] = {};
				}
				currentBranch = currentBranch[c];
			}
			currentBranch.entry = entry;
		}
		return tree;
	}
};
