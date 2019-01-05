class DictionaryFetcherBackground
{
	constructor(name, dictionary)
	{
		this.dictionary = dictionary;
		this.name = name;
		
		this.requestDataSlot = new MessageSlot(name + "RequestData", this.onRequestDataMessage.bind(this));
		this.setDataSlot     = new MessageSlot(name + "SetData", this.onSetDataMessage.bind(this));
    }
    
    setDictionary(dictionary)
    {
        this.dictionary = dictionary;
    }
	
	async onRequestDataMessage(message, sender)
	{
		var dictionaryEntries;
		
		if (message && message.words)
		{
			var dictionaryRequest = {};
			dictionaryRequest.words = message.words;
			dictionaryEntries = await this.dictionary.getMatches(message);
		}
		else
		{
			dictionaryEntries = await this.dictionary.getEverything();			
		}
		
		var messageSender = new MessageSender(this.name + "ResponseData");
		var response = { entries: dictionaryEntries };
		messageSender.sendToTab(sender.tab.id, response);
	}
	
	onSetDataMessage(message, sender)
	{
		this.dictionary.setData(message.entries);
	}
}
