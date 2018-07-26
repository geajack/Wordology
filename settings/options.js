var optionsManager = new OptionsManager();

async function initOptionsTab()
{	
	var options = await optionsManager.getOptions();
	
	document.getElementById("useInflection").checked = options.useInflection;
	document.getElementById("rootLength").value = options.minPrefixLength;
	document.getElementById("suffixLength").value = options.maxSuffixLength;
	document.getElementById("urlInput").value = options.lookupURL;
	document.getElementById("undefinedColorInput").value = options.notDefinedColor;
	document.getElementById("definedColorInput").value = options.definedColor;
	document.getElementById("similarColorInput").value = options.similarColor;
	
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
	
	document.getElementById("undefinedColorInput").addEventListener("change",
		function(e)
		{
			var value = document.getElementById("undefinedColorInput").value;
			optionsManager.setOption("notDefinedColor", value);
		}
	);
	
	document.getElementById("definedColorInput").addEventListener("change",
		function(e)
		{
			var value = document.getElementById("definedColorInput").value;
			optionsManager.setOption("definedColor", value);
		}
	);
	
	document.getElementById("similarColorInput").addEventListener("change",
		function(e)
		{
			var value = document.getElementById("similarColorInput").value;
			optionsManager.setOption("similarColor", value);
		}
	);
	
	document.getElementById("useInflection").addEventListener("change",
		function(e)
		{
			var value = document.getElementById("useInflection").checked;
			optionsManager.setOption("useInflection", value);
		}
	);
	
	document.getElementById("rootLength").addEventListener("change",
		function(e)
		{
			var value = parseInt(document.getElementById("rootLength").value);
			optionsManager.setOption("minPrefixLength", value);
		}
	);
	
	document.getElementById("suffixLength").addEventListener("change",
		function(e)
		{
			var value = parseInt(document.getElementById("suffixLength").value);
			optionsManager.setOption("maxSuffixLength", value);
		}
	);
	
	document.getElementById("urlInput").addEventListener("change",
		function(e)
		{
			var value = document.getElementById("urlInput").value;
			optionsManager.setOption("lookupURL", value);
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
			console.log("Loading");
			console.log(blacklistedPrefixList);
			return storedList.map(x => ({prefix:x}));
		},
		
		insertItem: function(item)
		{
			blacklistedPrefixList.push(item.prefix);
			optionsManager.setOption("blacklistedPrefixes", blacklistedPrefixList);
			console.log("Inserting");
			console.log(blacklistedPrefixList);
		},
		
		updateItem: function(item)
		{
		},
		
		deleteItem: function(item)
		{
			blacklistedPrefixList = blacklistedPrefixList.filter(x => x != item.prefix);
			optionsManager.setOption("blacklistedPrefixes", blacklistedPrefixList);
			console.log("Deleting");
			console.log(blacklistedPrefixList);
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
