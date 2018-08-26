const optionsManager = new OptionsManager();

async function initOptionsTab()
{	
	var options = await optionsManager.getOptions();

	linkInputToOption({
		inputId: "useInflection",
		optionName: "useInflection",
		options: options,
		propertyName: "checked"
	});
	linkInputToOption({
		inputId: "rootLength",
		optionName: "minPrefixLength",
		options: options
	});
	linkInputToOption({
		inputId: "suffixLength",
		optionName: "maxSuffixLength",
		options: options
	});
	linkInputToOption({
		inputId: "urlInput",
		optionName: "lookupURL",
		options: options
	});
	linkInputToOption({
		inputId: "undefinedColorInput",
		optionName: "notDefinedColor",
		options: options
	});
	linkInputToOption({
		inputId: "definedColorInput",
		optionName: "definedColor",
		options: options
	});
	linkInputToOption({
		inputId: "similarColorInput",
		optionName: "similarColor",
		options: options
	});
	linkInputToOption({
		inputId: "undefinedOpacityInput",
		optionName: "notDefinedOpacity",
		options: options
	});
	linkInputToOption({
		inputId: "definedOpacityInput",
		optionName: "definedOpacity",
		options: options
	});
	linkInputToOption({
		inputId: "similarOpacityInput",
		optionName: "similarOpacity",
		options: options
	});
	
	initBlacklistedPrefixesInputs(options.blacklistedPrefixes);
	initWhitelistedSuffixesInputs(options.whitelistedSuffixes);
	
	document.getElementById("resetColorButton").addEventListener("click",
		async function(e)
		{
			document.getElementById("undefinedColorInput").value = "#FF6464";
			document.getElementById("definedColorInput").value = "#64FF32";
			document.getElementById("similarColorInput").value = "#6496FF";
			await optionsManager.setOption("notDefinedColor", "#FF6464");
			await optionsManager.setOption("definedColor", "#64FF32");
			optionsManager.setOption("similarColor", "#6496FF");
		}
	);
}

function linkInputToOption(config)
{
	var { inputId, optionName, options, propertyName, readFilter, writeFilter } = config;
	
	propertyName = propertyName || "value";

	document.getElementById(inputId)[propertyName] = options[optionName];

	document.getElementById(inputId).addEventListener("change",
		function(e)
		{
			var value = document.getElementById(inputId).value;
			optionsManager.setOption(optionName, value);
		}
	);
}

function initWhitelistedSuffixesInputs(storedList)
{
	var whitelistedSuffixList = [];
	var controller =
	{
		loadData: async function(filter)
		{
			if (!storedList)
			{
				optionsManager.setOption("whitelistedSuffixes", []);
				storedList = [];
			}
			whitelistedSuffixList = storedList;
			return storedList.map(x => ({suffix:x}));
		},
		
		insertItem: function(item)
		{
			whitelistedSuffixList.push(item.suffix);
			optionsManager.setOption("whitelistedSuffixes", whitelistedSuffixList);
		},
		
		updateItem: function(item)
		{
		},
		
		deleteItem: function(item)
		{
			whitelistedSuffixList = whitelistedSuffixList.filter(x => x != item.suffix);
			optionsManager.setOption("whitelistedSuffixes", whitelistedSuffixList);
		}
	};
	
	$("#whitelistedSuffixes").jsGrid(
		{
			width: "280px",
			height: "200px",
			
			autoload: true,
			controller: controller,
			
			editing: false,
			sorting: false,			
			paging: false,
			confirmDeleting: false,
			
			fields: [
				{ title: "Suffix", name: "suffix", type: "text", width: 200 },
				{ type: "control", editButton: false }
			]
		}
	);
	
	document.getElementById("addSuffixButton").addEventListener("click",
		function(e)
		{
			$("#whitelistedSuffixes").jsGrid("insertItem", { suffix: document.getElementById("addSuffixInput").value });
			document.getElementById("addSuffixInput").value = "";
		}
	);
}

function initBlacklistedPrefixesInputs(storedList)
{
	var blacklistedPrefixList = [];
	var controller =
	{
		loadData: async function(filter)
		{
			if (!storedList)
			{
				optionsManager.setOption("blacklistedPrefixes", []);
				storedList = [];
			}
			blacklistedPrefixList = storedList;
			return storedList.map(x => ({prefix:x}));
		},
		
		insertItem: function(item)
		{
			blacklistedPrefixList.push(item.prefix);
			optionsManager.setOption("blacklistedPrefixes", blacklistedPrefixList);
		},
		
		updateItem: function(item)
		{
		},
		
		deleteItem: function(item)
		{
			blacklistedPrefixList = blacklistedPrefixList.filter(x => x != item.prefix);
			optionsManager.setOption("blacklistedPrefixes", blacklistedPrefixList);
		}
	};
	
	$("#blacklistedPrefixes").jsGrid(
		{
			width: "280px",
			height: "200px",
			
			autoload: true,
			controller: controller,
			
			editing: false,
			sorting: false,			
			paging: false,
			confirmDeleting: false,
			
			fields: [
				{ title: "Prefix", name: "prefix", type: "text", width: 200 },
				{ type: "control", editButton: false }
			]
		}
	);
	
	document.getElementById("addPrefixButton").addEventListener("click",
		function(e)
		{
			$("#blacklistedPrefixes").jsGrid("insertItem", { prefix: document.getElementById("addPrefixInput").value });
			document.getElementById("addPrefixInput").value = "";
		}
	);
}
