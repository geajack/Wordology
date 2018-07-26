(function BackgroundScript()
{
	var OM = new OptionsManager();
	OM.initializeStorage();

	var TM = new ToggleManagerBackground("ToggleManager",
		{
			notReadyIcon : "./icon_inactive_32.png",
			offIcon      : "./icon_off_32.png",
			runningIcon  : "./icon_inactive_32.png",
			onIcon       : "./icon_on_32.png"
		}
	);

	var D = new DictionaryFetcherBackground("DictionaryFetcher", new Dictionary());
})();
