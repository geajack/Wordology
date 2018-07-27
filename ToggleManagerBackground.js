class ToggleManagerBackground
{
	/*
	 * config
	 *     onIcon       : path or animation
	 *     offIcon      : path or animation
	 *     runningIcon  : path or animation
	 *     notReadyIcon : path or animation
	 * */
	constructor(name, config)
	{
		this.onIcon       = config.onIcon;
		this.offIcon      = config.offIcon;
		this.runningIcon  = config.runningIcon;
		this.notReadyIcon = config.notReadyIcon;
		
		this.tabStateMap = new Map();
		
		this.firstOnMessageSender   = new MessageSender(name + "ToggleFirstOn");
		this.toggleOnMessageSender  = new MessageSender(name + "ToggleOn");
		this.toggleOffMessageSender = new MessageSender(name + "ToggleOff");
		
		new MessageSlot(name + "Ready",
			(message, sender) => this.onReadyMessage(sender.tab.id)
		);
		
		new MessageSlot(name + "DoneRunning",
			(message, sender) => this.onDoneRunningMessage(sender.tab.id)
		);
		
		browser.browserAction.onClicked.addListener(
			tab => this.toggle(tab.id)
		);
		
		browser.webNavigation.onBeforeNavigate.addListener(
			details => 
			{
				if (details.frameId === 0)
				{
					this.onTabUnload(details.tabId);
				}
			}
		);		
	}
	
	toggle(tabId)
	{
		var state = this.getTabState(tabId);
		
		switch (state)
		{			
			case TabState.NeverOn:
				this.firstOnMessageSender.sendToTab(tabId, {});
				this.setTabState(tabId, TabState.Running);
				browser.browserAction.setIcon({path: this.runningIcon, tabId: tabId});
			break;
			
			case TabState.Off:
				this.toggleOnMessageSender.sendToTab(tabId);
				this.setTabState(tabId, TabState.Running);
				browser.browserAction.setIcon({path: this.runningIcon, tabId: tabId});
			break;
			
			case TabState.On:
				this.toggleOffMessageSender.sendToTab(tabId);
				this.setTabState(tabId, TabState.Off);
				browser.browserAction.setIcon({path: this.offIcon, tabId: tabId});
			break;
			
			case undefined:
			case TabState.Running:
				// Do nothing.
			break;
		}
	}
	
	getTabState(tabId)
	{
		return this.tabStateMap.get(tabId);
	}
	
	setTabState(tabId, state)
	{
		this.tabStateMap.set(tabId, state);
	}
	
	onBrowserAction(tabId)
	{
		this.toggle(tabId);
	}
	
	onTabUnload(tabId)
	{
		this.tabStateMap.delete(tabId);
		browser.browserAction.setIcon({path: this.notReadyIcon, tabId: tabId});
	}
	
	onTabClose(tabId)
	{
		this.tabStateMap.delete(tabId);
	}
	
	onReadyMessage(tabId)
	{
		this.setTabState(tabId, TabState.NeverOn);
		browser.browserAction.setIcon({path: this.offIcon, tabId: tabId});
	}
	
	onDoneRunningMessage(tabId)
	{
		this.setTabState(tabId, TabState.On);
		browser.browserAction.setIcon({path: this.onIcon, tabId: tabId});
	}
	
}
