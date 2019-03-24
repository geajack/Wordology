class ToggleManagerPage
{
	constructor(name, config)
	{
		if (config.onFirstOn)
			this.onFirstOn = config.onFirstOn;
		if (config.onToggleOn)
			this.onToggleOn = config.onToggleOn;
		if (config.onToggleOff)
			this.onToggleOff = config.onToggleOff;
		if (config.onLoggedOut)
			this.onLoggedOut = config.onLoggedOut;
		if (config.onLoggedOutPress)
			this.onLoggedOutPress = config.onLoggedOutPress;
		if (config.onChangedProfile)
			this.onChangedProfile = config.onChangedProfile;
		if (config.onChangedProfilePress)
			this.onChangedProfilePress = config.onChangedProfilePress;

		this.readyMessageSender = new MessageSender(name + "Ready");
		this.doneRunningMessageSender = new MessageSender(name + "DoneRunning");

		new MessageSlot(name + "ToggleFirstOn",
			async (message, sender) =>
			{
				await this.onFirstOn();
				this.doneRunningMessageSender.sendToRuntime({});
			}
		);

		new MessageSlot(name + "ToggleOn",
			async (message, sender) =>
			{
				await this.onToggleOn();
				this.doneRunningMessageSender.sendToRuntime({});
			}
		);

		new MessageSlot(name + "ToggleOff",
			(message, sender) => this.onToggleOff()
		);

		new MessageSlot(name + "LoggedOut",
			(message, sender) => this.onLoggedOut()
		);

		new MessageSlot(name + "LoggedOutPress",
			(message, sender) => this.onLoggedOutPress()
		);

		new MessageSlot(name + "ChangedProfile",
			(message, sender) => this.onChangedProfile()
		);

		new MessageSlot(name + "ChangedProfilePress",
			(message, sender) => this.onChangedProfilePress()
		);

		this.readyMessageSender.sendToRuntime();
	}

	onFirstOn()	{}
	onToggleOn() {}
	onToggleOff() {}
	onLoggedOut() {}
	onLoggedOutPress() {}
	onChangedProfile() {}
	onChangedProfilePress() {}
}
