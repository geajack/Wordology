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
		var messageSender = new MessageSender(this.name + "ResponseData");

		try
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

			var response = { entries: dictionaryEntries, successful: true };
			messageSender.sendToTab(sender.tab.id, response);
		}
		catch
		{
			messageSender.sendToTab(sender.tab.id, { successful: false });
		}
	}

	onSetDataMessage(message, sender)
	{
		this.dictionary.setData(message.entries);
	}
}
