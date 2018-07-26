class OptionsManager
{
	constructor()
	{

	}

	async initializeStorage()
	{
		var localData = await browser.storage.local.get();
		if (localData["0/options"] === undefined)
		{
			localData["0/options"] = OptionsManager.DefaultOptions;
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
		var localData = await browser.storage.local.get();
		var id = "0";
		var options = localData[id + "/options"]
		options[optionName] = value;
		var dataToSet = {}
		dataToSet[id + "/options"] = options;
		var setDataPromise = browser.storage.local.set(dataToSet);
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
	notDefinedColor     : "#FF6464",// "rgba(255, 100, 100, 0.3)"
	definedColor        : "#64FF32",//" "rgba(100, 255, 50 , 0.3)"
	similarColor        : "#6496FF"// "rgba(100, 150, 255, 0.3)"
};