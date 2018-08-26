class FileInputButton
{
	constructor(buttonElement)
	{
		this.onChooseFile = function(f) {};
		
		this.fileInput = document.createElement("input");
		this.fileInput.setAttribute("type", "file");
		this.fileInput.setAttribute("accept", ".json,application/json")
		this.fileInput.addEventListener("change",
			e => this.onChooseFile(e.target.files[0])
		);
		
		buttonElement.addEventListener("click",
			e => this.fileInput.click()
		);
	}
}

function initDictionaryTab()
{
	var D = new Dictionary();
	
	var sFI = new FileInputButton(document.getElementById("importButton"));
	sFI.onChooseFile =
		function(file)
		{	
			var reader = new FileReader();
			reader.onload = function(e)
				{
					var json = e.target.result;
					D.setData(JSON.parse(json)).then(
						function()
						{
							$("#wordTable").jsGrid("loadData");
						}
					);
				};
			reader.readAsText(file);
		};
		
	document.getElementById("clearButton").addEventListener("click",
		function(e)
		{
			var response = window.prompt("To delete all words, type \"yes\".");
			if (response == "yes")
			{
				D.clear().then(
					function()
					{
						$("#wordTable").jsGrid("loadData");
					}
				);
			}
		}
	);
	
	var dateString = (new Date()).toLocaleString();
	document.getElementById("downloadLink").setAttribute("download", `Dictionary (${dateString}).json`);

	updateJson(D);
	
	var controller = 	
	{
		loadData: async function(filter)
		{
			var dictOfEntries = await D.getEverything();
			var listOfEntries = Object.values(dictOfEntries);
			return listOfEntries;
		},
		
		insertItem: function(item)
		{
		},
		
		updateItem: function(item)
		{
			D.setData([item]);
			updateJson(D);
		},
		
		deleteItem: function(item)
		{
			D.removeEntries([item.word]);
			updateJson(D);
		}
	};
	
	$("#wordTable").jsGrid(
		{
			width: "100%",
			height: "400px",
			
			autoload: true,
			controller: controller,
			rowClick: function(args)
			{
				let entry = args.item;
				let match = { entry: entry, exact: true };
				WordEditDialog.open(
					{
						word: entry.word,
						match: match
					}
				).then(
					function(responseEntry)
					{
						$("#wordTable").jsGrid("updateItem", entry, responseEntry);
					}
				);
			},
			
			editing: true,
			sorting: true,			
			paging: true,
			deleteConfirm: "Really delete this word?",
			
			fields: [
				{ title: "Word", name: "word", type: "text", width: 150 },
				{ title: "Translation", name: "definition", type: "text", width: 150 },
				{ type: "control", editButton: false }
			]
		}
	);
	
	document.addEventListener("tabChange",
		function(e)
		{
			if (e.detail == "dictionary")
			{
				$("#wordTable").jsGrid("render");
			}
		}
	);

	function updateJson(dict)
	{
		dict.getEverything().then(
			function(data)
			{
				var json = JSON.stringify(Object.values(data));
				var escapedJson = json.replace(/ /g, "%20");
				document.getElementById("downloadLink").setAttribute("href", "data:application/json," + escapedJson);			
			}
		);
	}
}
