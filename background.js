(async function BackgroundScript()
{
	var OM = new OptionsManager();
	await OM.initializeStorage();

	var TM = new ToggleManagerBackground("ToggleManager",
		{
			notReadyIcon : "./icons/icon_inactive_32.png",
			offIcon      : "./icons/icon_off_32.png",
			runningIcon  : "./icons/icon_inactive_32.png",
			onIcon       : "./icons/icon_on_32.png"
		}
	);

	var profileId = await OM.getCurrentProfileId();
    var DF = new DictionaryFetcherBackground("DictionaryFetcher", new Dictionary(profileId));
    OM.addOnChangeProfileListener(onChangeProfile);

    function onChangeProfile(profileId)
    {
        console.log("Profile changed to " + profileId);
        DF.setDictionary(new Dictionary(profileId));
    }
})();
