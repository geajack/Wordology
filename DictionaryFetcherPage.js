class DictionaryFetcherPage
{
	constructor(name)
	{
		this.name = name;
		this.dataRequestCallback = function() {};

		this.responseDataMessageSlot = new MessageSlot(
			name + "ResponseData",
			this.onResponseDataMessage.bind(this)
		);
	}

	onResponseDataMessage(message, sender)
	{
		this.dataRequestCallback(message.entries);
	}

	getMatches(requestObject)
	{
		var messageSender = new MessageSender(this.name + "RequestData");
		messageSender.sendToRuntime(requestObject);
		return new Promise(
			resolve =>
			{
				this.dataRequestCallback = resolve;
			}
		);
	}

	getEverything()
	{
		var messageSender = new MessageSender(this.name + "RequestData");
		messageSender.sendToRuntime(null);
		return new Promise(
			resolve =>
			{
				this.dataRequestCallback = resolve;
			}
		);
	}

	setData(listOfEntries)
	{
		var message = { entries: listOfEntries };
		var messageSender = new MessageSender(this.name + "SetData");
		messageSender.sendToRuntime(message);
	}
}
