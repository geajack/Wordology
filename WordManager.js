class WordManager {

	constructor() {
		this.wordElements = [];
	}
	
	processNode(dom, alphabet)
	{
		this.regexp = new RegExp("([^" + alphabet + "]+)");
		var textNodes = [];
		var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL,
			{
				acceptNode: function(node)
					{
						if (node.tagName == "SCRIPT" || node.tagName == "STYLE")
						{
							return NodeFilter.FILTER_REJECT;
						}
						else if (node.hasAttribute && node.hasAttribute(WordElement.prototype.ID_ATTR))
						{
							return NodeFilter.FILTER_REJECT;
						}
						else if (node.nodeType == 3)
						{
							return NodeFilter.FILTER_ACCEPT;
						}
						else
						{
							return NodeFilter.FILTER_SKIP;
						}
					}
			}
		);
		
		var node = walker.nextNode();
		while (node)
		{
			textNodes.push(node);
			node = walker.nextNode();
		}
		
		for (var i = 0; i < textNodes.length; i++)
		{
			this.processTextNode(textNodes[i]);
		}
	}
	
	getWordElements()
	{
		return this.wordElements;
	}
	
	getWords()
	{
		return this.wordElements.map(function(we) { return we.getWord(); });
	}
	
	updateDefinition(word, definition, options)
	{
		var undefinedWordElements = this.wordElements.filter(we => !we.hasMatch());
		
		if (options.useInflection)
		{
			var matches1 = WordMatching.UpdateUndefinedWords(undefinedWordElements.map(we => we.getWord()),
				{word: word, definition: definition},
				options
			);

			var matchedWordElements = this.wordElements.filter(
				we => we.hasMatch() && !we.hasExactMatch()
			);
			
			var taggedMatches = matchedWordElements.map(
				we =>
				{
					let match = we.getMatch();
					match.word = we.getWord();
					return match;
				}
			);
			var matches2 = WordMatching.UpdateMatchedWords(taggedMatches,
				{word: word, definition: definition},
				options
			);
			this.setData(matches1);
			this.setData(matches2);
		}
		
		var match = {entry:{word:word,definition:definition}, exact:true};
		var dataToSet = {}
		dataToSet[word] = match;
		this.setData(dataToSet);
	}
	
	setData(dictOfMatches)
	{
		for (var wordElement of this.wordElements)
		{
			if (dictOfMatches[wordElement.getWord()] !== undefined)
			{
				var match = dictOfMatches[wordElement.getWord()];
				wordElement.setData(match);
			}
		}
	}
	
	show()
	{
		for (var i = 0; i < this.wordElements.length; i++)
		{
			this.wordElements[i].show();
		}		
	}
	
	hide()
	{
		for (var i = 0; i < this.wordElements.length; i++)
		{
			this.wordElements[i].hide();
		}
	}
	
	tokenize(text)
	{
		if (text.replace(/^\s+|\s+$/g, '').length === 0) return [];
		var tokens = text.split(this.regexp);
		return tokens;
	}
	
	processTextNode(node)
	{
		var parent = node.parentElement;
		var text = node.textContent;
		var tokens = this.tokenize(text);
		const START = 0;
		const WORD_TOKEN = 1;
		const NONWORD_TOKEN = 2;
		var state = START;
		
		for (var token of tokens)
		{
			switch (state)
			{
				case START:
					if (token === "")
					{
						state = NONWORD_TOKEN;
						break;
					}
					else
					{
						state = WORD_TOKEN;
					}
				
				case WORD_TOKEN:
					if (token !== "")
					{
						var word = new WordElement(document, token);
						this.addWordElement(word);
						parent.insertBefore(word.span, node);
						state = NONWORD_TOKEN;
					}
				break;
				
				case NONWORD_TOKEN:
					parent.insertBefore(document.createTextNode(token), node);
					state = WORD_TOKEN;
				break;
			}
		}
		
		if (tokens.length > 0)
		{
			node.remove();
		}
	}
	
	addWordElement(word)
	{
		this.wordElements.push(word);
	}
}
