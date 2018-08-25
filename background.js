(function BackgroundScript()
{
	var OM = new OptionsManager();
	OM.initializeStorage();

	var TM = new ToggleManagerBackground("ToggleManager",
		{
			notReadyIcon : "./icons/icon_inactive_32.png",
			offIcon      : "./icons/icon_off_32.png",
			runningIcon  : "./icons/icon_inactive_32.png",
			onIcon       : "./icons/icon_on_32.png"
		}
	);

	var D = new DictionaryFetcherBackground("DictionaryFetcher", new Dictionary());
})();
