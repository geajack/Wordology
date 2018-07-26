class Dictionary
{
	constructor()
	{
		var request = window.indexedDB.open("0/database", 1);
		var upgraded = false;
		this.willOpen = new Promise(
			function(resolve, reject)
			{
				request.onupgradeneeded = function(event)
				{
					var db = event.target.result;
					var objectStore = db.createObjectStore("words", { keyPath: "word" });
					objectStore.transaction.oncomplete = function(event)
					{
						resolve(db);
					};
					upgraded = true;
				};
		
				request.onsuccess = function(event)
				{
					var db = event.target.result;
					if (!upgraded)
					{
						resolve(db);
					}
				};
			}
		);
	}
	
	async setData(listOfEntries)
	{
		var db = await this.willOpen;
		var objectStore = db.transaction(["words"], "readwrite").objectStore("words");
		for (var entry of listOfEntries)
		{
			objectStore.put(entry);
		}
	}
	
	async getMatches(requestObject)
	{
		var requestedWords = requestObject.words;
		var options        = requestObject.options;
		
		var db = await this.willOpen;
		
		return new Promise(
			function(resolve, reject)
			{
				var request = db.transaction(["words"]).objectStore("words").getAll();
				request.onsuccess =
				function(event)
				{
					var dictionaryEntries = request.result;
					var variables = {
						dictionaryEntries : dictionaryEntries,
						requestedWords    : requestedWords,
						options           : options
					};
					
					var worker = new Worker("wordmatcher.worker.js");
					worker.postMessage(variables);
					worker.onmessage = 
					function(e)
					{
						var dictOfMatches = e.data;
						resolve(dictOfMatches);
					};
				};
			}
		);
	}
	
	async removeEntries(listOfWords)
	{
		var _this = this;
		var db = await this.willOpen;
		var objectStore = db.transaction(["words"], "readwrite").objectStore("words");
		for (var word of listOfWords)
		{
			objectStore.delete(word);
		}
	}
	
	async getEverything()
	{
		var db = await this.willOpen;
		return new Promise(
			function(resolve, reject)
			{
				var request = db.transaction(["words"]).objectStore("words").getAll();
				//request.result; uncommenting this makes onsuccess not run
				request.onsuccess = function(event)
				{
					var responseEntries = {};
					var dictionaryEntries = request.result;
					for (var entry of dictionaryEntries)
					{
						responseEntries[entry.word] = entry;
					}
					resolve(responseEntries);
				};
				request.onerror = function(event)
				{
					console.log("Database error");
				}
			}
		);
	}
	
	async clear()
	{
		var db = await this.willOpen;
		db.transaction(["words"], "readwrite").objectStore("words").clear();
	}
	
}
