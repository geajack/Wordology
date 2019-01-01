class DictionaryTabController
{
    constructor($scope, $timeout)
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
    }

    loadWordList(dictOfEntries)
    {   
        this.wordList = null;
        this.$scope.$apply(); // Make AngularJS notice the change
        
        this.wordList = Object.values(dictOfEntries);
        this.dictionaryData = dictOfEntries;
        var json = JSON.stringify(dictOfEntries);
        
        var downloadUri = `data:application/json,${json}`;
        document.getElementById("downloadLink").setAttribute("href", downloadUri); // Firefox's security features prevent AngularJS from setting href
        
        this.$scope.$apply();
    }

    importFile(data)
    {
        try
        {
            var dictOfEntries = JSON.parse(data);
            this.loadWordList(dictOfEntries);
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