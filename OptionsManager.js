class OptionsManager
{
	constructor()
	{
		this.dataSetPending = false;
	}

	async initializeStorage()
	{
		var localData = await browser.storage.local.get();
		var modificationsNecessary = false;

		if (localData["0/options"] === undefined)
		{
			localData["0/options"] = OptionsManager.DefaultOptions;
			modificationsNecessary = true;
		}
		else
		{
			for (var optionName in OptionsManager.DefaultOptions)
			{
				if (localData["0/options"][optionName] === undefined)
				{
					localData["0/options"][optionName] = OptionsManager.DefaultOptions[optionName];
					modificationsNecessary = true;
				}
			}
		}

		if (modificationsNecessary)
		{
			browser.storage.local.set(localData);
		}
	}

	setCurrentProfile(id)
	{

	}
	
	async getCurrentProfileId()
	{
		return "0";
	}

	async getProfileName(id)
	{
	}

	async getProfiles()
	{
		return [{id: "0", name: "Default Profile"}];
	}

	async setOption(optionName, value)
	{
		if (this.dataSetPending)
		{
			throw new Error(
				`Attempted to call OptionsManager.setOption() while data set was still pending.
				Due to the way localStorage works, you must wait for the previous set to complete
				before setting again.`
			);
		}

		var localData = await browser.storage.local.get();
		var id = "0";
		var options = localData[id + "/options"]
		options[optionName] = value;
		var dataToSet = {}
		dataToSet[id + "/options"] = options;
		this.dataSetPending = true;
		var setDataPromise = browser.storage.local.set(dataToSet).then(() => {this.dataSetPending = false});
		return setDataPromise;
	}

	async getOptions()
	{
		var localData = await browser.storage.local.get();
		var id = "0";
		var options = localData[id + "/options"];
		return options;
	}

	deleteProfile(id)
	{
	}

	createProfile(name) // id
	{
	}

	renameProfile(id, name)
	{
	}
}

OptionsManager.DefaultOptions =
{
	blacklistedPrefixes : [],
	whitelistedSuffixes : [],
	minPrefixLength     : 4,
	maxSuffixLength     : 4,
	useInflection       : true,
	lookupURL           : "https://translate.google.com/#auto/en/$",
	notDefinedColor     : "#FF6464",
	definedColor        : "#64FF32",
	similarColor        : "#6496FF",
	notDefinedOpacity   : 35,
	definedOpacity      : 35,
	similarOpacity      : 35
};