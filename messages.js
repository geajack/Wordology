class MessageSlot
{
	constructor(name, handler)
	{
		this.name = name;
		this.handler = handler;

		browser.runtime.onMessage.addListener(
			(message, sender, response) =>
			{
				if (message.slotName == this.name)
				{
					this.handler(message.content, sender);
				}
			}
		);
	}

	setName(name)
	{
		this.name = name;
	}

	setHandler(handler)
	{
		this.handler = handler;
	}
}

class MessageSender
{
	constructor(name)
	{
		this.slotName = name;
	}

	setTargetSlot(name)
	{
		this.slotName = name;
	}

	sendToRuntime(message)
	{
		browser.runtime.sendMessage(
			{
				slotName: this.slotName,
				content : message
			}
		);
	}

	sendToTab(tabId, message)
	{
		browser.tabs.sendMessage(
			tabId,
			{
				slotName: this.slotName,
				content : message
			}
		);
	}
}
