(async function BackgroundScript()
{
	let browserLanguageTag = browser.i18n.getUILanguage();
	let [browserLanguage, secondaryTag] = browserLanguageTag.split("-");

	let appLanguage = "en";
	if (WordologyStrings.SUPPORTED_LANGUAGES.includes(browserLanguage))
	{
		appLanguage = browserLanguage;
	}

	var OM = new OptionsManager();
	await OM.initializeStorage(appLanguage);

	var TM = new ToggleManagerBackground("ToggleManager",
		{
			notReadyIcon: "./icons/icon_inactive_32.png",
			offIcon: "./icons/icon_off_32.png",
			runningIcon: "./icons/icon_inactive_32.png",
			onIcon: "./icons/icon_on_32.png"
		}
	);

	var profileId = await OM.getCurrentProfileId();
	var DF = new DictionaryFetcherBackground("DictionaryFetcher");
	OM.addOnChangeProfileListener(onChangeProfile);

	if (profileId !== null)
	{
		DF.setDictionary(new Dictionary(profileId));
	}
	else
	{
		TM.loggedOut();
	}

	function onChangeProfile(profileId) {
		if (profileId !== null)
		{
			DF.setDictionary(new Dictionary(profileId));
			TM.loggedIn();
		}
		else
		{
			TM.loggedOut();
		}
	}
})();
