class DictionaryTabController
{
    constructor($scope)
    {
        this.$scope = $scope;
        this.wordList = null;
        this.downloadUri = "";
        this.D = new Dictionary();
        this.D.getEverything().then(result => this.loadWordList(result));
        this.wordListColumns = [
            { name: "word", label: "Word", searchable: true },
            { name: "definition", label: "Definition", searchable: true }
        ];
        this.onClickWord = this.onClickWord.bind(this);
        this.onDeleteWord = this.onDeleteWord.bind(this);
    }

    async onClickWord(word)
    {
        var definition = this.dictionaryData[word].definition;
        var match = { entry: { word: word, definition: definition }, exact: true };
        var result = await WordEditDialog.open({ word: word, match: match });
        this.dictionaryData[word].definition = result.definition;
        this.D.setData([{ word: word, definition: result.definition }]);
        this.loadWordList(this.dictionaryData);
    }

    onDeleteWord(word)
    {
        this.D.removeEntries([word]);
    }

    loadWordList(dictOfEntries)
    {   
        this.wordList = null;
        try
        {
            this.$scope.$apply(); // Make AngularJS notice the change
        }
        catch {}
        
        this.wordList = Object.values(dictOfEntries);
        this.dictionaryData = dictOfEntries;
        var json = JSON.stringify(dictOfEntries);
        
        var downloadUri = `data:application/json,${json}`;
        document.getElementById("downloadLink").setAttribute("href", downloadUri); // Firefox's security features prevent AngularJS from setting href
        
        try
        {
            this.$scope.$apply();
        }
        catch {}
    }

    clearData()
    {
        var result = prompt(
            "To delete your entire wordlist for this profile permanently,\n" +
            "type DELETE below in all-capital letters, and click OK."
        );
        if (result === "DELETE")
        {
            this.loadWordList({});
            this.D.clear();
        }
    }

    importFile(data)
    {
        try
        {
            var dictOfEntries = JSON.parse(data);
            this.loadWordList(dictOfEntries);
            this.D.setData(Object.values(dictOfEntries));
        }
        catch
        {
            alert("There was an error reading your file. Was that the right file?");
        }
    }

    requestImportFile()
    {
        var inputElement = document.createElement("input");
        inputElement.setAttribute("type", "file");
        inputElement.setAttribute("accept", ".json");
        inputElement.addEventListener("change", fileChangeCallback);
        inputElement.click();

        const controller = this;

        function fileChangeCallback(event)
        {
            var fileReader = new FileReader()
            fileReader.onload = fileReadCallback;
            fileReader.readAsText(event.target.files[0]);            
        }

        function fileReadCallback(event)
        {
            controller.importFile(event.target.result);
        }
    }
}

app.component("dictionaryTab",
    {
        controller: DictionaryTabController,
        templateUrl: "dictionary-tab/dictionary-tab.html",
        controllerAs: "ctrl"
    }
);