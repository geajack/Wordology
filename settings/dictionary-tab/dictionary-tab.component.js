class DictionaryTabController
{
    constructor($scope)
    {
        this.$scope = $scope;
        this.wordList = null;
        this.downloadUri = "";
        this.reloadWords();
        this.wordListColumns = [
            { name: "word", label: "Word", searchable: true },
            { name: "definition", label: "Definition", searchable: true }
        ];
        this.onClickWord = this.onClickWord.bind(this);
        this.onDeleteWord = this.onDeleteWord.bind(this);

        this.$scope.$on("reload", () => this.reloadWords());
    }

    async reloadWords()
    {
        var OM = new OptionsManager();
        var profileId = await OM.getCurrentProfileId();
        var profileName = await OM.getProfileName(profileId);
        var date = (new Date()).toLocaleDateString().replace(/\//g, "-");
        this.fileName = `${profileName} (${date}).json`;
        this.D = new Dictionary(profileId);
        var result = await this.D.getEverything();
        this.loadWordList(result);
    }

    async onClickWord(word)
    {
        var definition = this.dictionaryData[word].definition;
        var match = { entry: { word: word, definition: definition }, exact: true };
        var result = await WordEditDialog.open({ word: word, match: match });
        if (result.definition)
        {
            this.dictionaryData[word].definition = result.definition;
            this.D.setData([{ word: word, definition: result.definition }]);
            this.loadWordList(this.dictionaryData);
        }
    }

    onDeleteWord(word)
    {
        this.D.removeEntries([word]);
        var dictOfEntries = {}
        for (let entry of this.wordList)
        {
            dictOfEntries[entry.word] = entry;
        }
        var json = JSON.stringify(dictOfEntries);
        var downloadUri = `data:application/json,${json}`;
        document.getElementById("downloadLink").setAttribute("href", downloadUri); // Firefox's security features prevent AngularJS from setting href
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
        var blob = new Blob([json], { "type": "application/json" });
        var downloadUri = URL.createObjectURL(blob);
        document.getElementById("downloadLink").setAttribute("href", downloadUri); // Firefox's security features prevent AngularJS from setting href

        try
        {
            this.$scope.$apply();
        }
        catch {}
    }

    clearData()
    {
        vex.dialog.buttons.YES.text = "OK";
        vex.dialog.buttons.NO.text = "Cancel";
        vex.dialog.prompt({
            message:
                "To delete your entire wordlist for this profile permanently,\n" +
                "type DELETE below in all-capital letters, and click OK.",
            callback: response =>
            {
                if (response === "DELETE")
                {
                    this.loadWordList({});
                    this.D.clear();
                }
            }
        });
    }

    async importFile(data)
    {
        try
        {
            var dictOfEntries = JSON.parse(data);
            await this.D.setData(Object.values(dictOfEntries));
            var dictOfEntries = await this.D.getEverything();
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