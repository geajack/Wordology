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

		if (localData["version"] === undefined)
		{
			localData["version"] = "1.2";
			modificationsNecessary = true;
		}

		if (localData["profile"] === undefined)
		{
			localData["profile"] = 0;
		}

		if (localData["profiles"] === undefined)
		{
			localData["profiles"] = [{id: 0, name: "Default Profile"}];
		}

        for (let profile of localData["profiles"])
        {
            var optionsKey = profile.id + "/options";
            if (localData[optionsKey] === undefined)
            {
                localData[optionsKey] = OptionsManager.DefaultOptions;
                modificationsNecessary = true;
            }
            else
            {
                for (var optionName in OptionsManager.DefaultOptions)
                {
                    if (localData[optionsKey][optionName] === undefined)
                    {
                        localData[optionsKey][optionName] = OptionsManager.DefaultOptions[optionName];
                        modificationsNecessary = true;
                    }
                }
            }
        }

		if (modificationsNecessary)
		{
			return await this.safeLocalStorageSet(localData);
		}
    }

    addOnChangeProfileListener(listener)
    {
        browser.storage.onChanged.addListener(
            (changes, storageAreaName) => {
                if (storageAreaName === "local")
                {
                    if (changes.profile !== undefined)
                    {
                        listener(changes.profile.newValue);
                    }
                }
            }
        );
    }

	async getOptions()
	{
		var localData = await browser.storage.local.get();
		var id = await this.getCurrentProfileId();
		var options = localData[id + "/options"];
		return options;
	}

	async getCurrentProfileId()
	{
        var localData = await browser.storage.local.get();
		return localData.profile;
	}

	async getProfileName(id)
	{
        var localData = await browser.storage.local.get();
		var profiles = localData.profiles;
		var filteredProfiles = profiles.filter(profile => profile.id === id)
		if (filteredProfiles.length === 0)
		{
			return null;
		}
		else
		{
			return filteredProfiles[0].name;
		}
	}

	async getProfiles()
	{
        var localData = await browser.storage.local.get();
		return localData.profiles;
	}

	async setOptions(valuesToSet)
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
		var profileId = 0;
		var currentOptions = localData[profileId + "/options"];
		var modifiedOptions = Object.assign({}, currentOptions, valuesToSet);
		var dataToSet = {};
		dataToSet[profileId + "/options"] = modifiedOptions;
		return await this.safeLocalStorageSet(dataToSet);
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
		var profileId = localData["profile"];
		var options = localData[profileId + "/options"]
		options[optionName] = value;
		var dataToSet = {}
		dataToSet[profileId + "/options"] = options;
		return await this.safeLocalStorageSet(dataToSet);
	}

	async setCurrentProfile(id)
	{
		return await this.safeLocalStorageSet({ profile: id });
	}

	async deleteProfile(id)
	{
		var profiles = await browser.storage.local.get("profiles");
		var newProfiles = profiles.filter(profile => profile.id !== id);
		var currentProfile = await this.getCurrentProfileId();
		var newProfile;
		if (currentProfile === id)
		{
			newProfile = null;
		}
		else
		{
			newProfile = currentProfile;
		}

		var dataToSet = {
			profile: newProfile,
			profiles: newProfiles
		}

		return await this.safeLocalStorageSet(dataToSet);
	}

	async createProfile(name)
	{
		var profiles = await this.getProfiles();
		var maximum = 0;
		for (let profile of profiles)
		{
			if (profile.id > maximum)
			{
				maximum = profile.id
			}
		}
		var newId = maximum + 1;
		var newProfile = { id: newId, name: name };
		profiles.push(newProfile);

		var dataToSet = {};
		dataToSet["profiles"] = profiles;
		dataToSet[newId + "/options"] = OptionsManager.DefaultOptions;

		return await this.safeLocalStorageSet(dataToSet);
	}

	async renameProfile(id, name)
	{
		var profiles = await this.getProfiles();
		for (let profile of profiles)
		{
			if (profile.id === id)
			{
				profile.name = name;
			}
		}
		return await this.safeLocalStorageSet({ profiles: profiles });
	}

	async safeLocalStorageSet(dataObject)
	{
		if (this.dataSetPending)
		{
			throw new Error(
				`Attempted to call OptionsManager.setOption() while data set was still pending.
				Due to the way localStorage works, you must wait for the previous set to complete
				before setting again.`
			);
		}
		else
		{
			this.dataSetPending = true;
			return browser.storage.local.set(dataObject).then(() => {this.dataSetPending = false});
		}
	}

	async safeLocalStorageSetKey(key, value)
	{
		if (this.dataSetPending)
		{
			throw new Error(
				`Attempted to call OptionsManager.setOption() while data set was still pending.
				Due to the way localStorage works, you must wait for the previous set to complete
				before setting again.`
			);
		}
		else
		{
			this.dataSetPending = true;
			return browser.storage.local.set(key, value).then(() => {this.dataSetPending = false});
		}
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
	similarOpacity      : 35,
	separatorCharacters : ""
};