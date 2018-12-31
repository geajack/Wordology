class DictionaryTabController
{
    constructor($scope, $timeout)
    {
        this.$scope = $scope;
        this.wordList = null;
        this.D = new Dictionary();
        this.D.getEverything().then(
            dictOfEntries => {
                this.wordList = Object.values(dictOfEntries);
                this.dictionaryData = dictOfEntries;
                this.$scope.$apply();
            }
        );
        this.wordListColumns = [
            { name: "word", label: "Word", searchable: true },
            { name: "definition", label: "Definition", searchable: true }
        ];
    }
}

app.component("dictionaryTab",
    {
        controller: DictionaryTabController,
        templateUrl: "dictionary-tab/dictionary-tab.html",
        controllerAs: "ctrl"
    }
);