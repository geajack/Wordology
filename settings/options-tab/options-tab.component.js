class OptionsTabController
{
    constructor($scope)
    {
        this.OM = new OptionsManager();
        this.options = null;
        this.oldOptions = null;
        this.optionsLoaded = false;
        this.$scope = $scope;
        this.OM.getOptions().then(options => {
            this.options = options;
            this.oldOptions = Object.assign({}, options);
            this.optionsLoaded = true;            
            this.blacklistedPrefixes = [
                { prefix: "przy" },
                { prefix: "prze" },
                { prefix: "naj" }
            ];
            this.whitelistedSuffixes = [
                { suffix: "łyście" },
                { suffix: "ejszy" },
                { suffix: "łyśmy" }
            ];
            // this.$scope.$digest();
        });
        
        this.prefixColumns = [
            { name: "prefix", label: "Prefix", searchable: false }
        ];
        this.suffixColumns = [
            { name: "suffix", label: "Suffix", searchable: false }
        ];
    }

    resetColorsToDefault()
    {
        var defaultColors = {
            notDefinedColor     : OptionsManager.DefaultOptions.notDefinedColor,
            definedColor        : OptionsManager.DefaultOptions.definedColor,
            similarColor        : OptionsManager.DefaultOptions.similarColor,
            notDefinedOpacity   : OptionsManager.DefaultOptions.notDefinedOpacity,
            definedOpacity      : OptionsManager.DefaultOptions.definedOpacity,
            similarOpacity      : OptionsManager.DefaultOptions.similarOpacity
        };
        this.OM.setOptions(defaultColors);
        Object.assign(this.options, defaultColors);
        Object.assign(this.oldOptions, defaultColors);
        this.$scope.$digest();
    }

    onUserChangeOption(key, newValue)
    {
        this.OM.setOption(key, newValue);
    }

    $doCheck()
    {
        if (this.optionsLoaded)
        {
            for (let key in this.options)
            {
                if (this.options[key] !== this.oldOptions[key])
                {
                    this.oldOptions[key] = this.options[key];
                    this.onUserChangeOption(key, this.options[key]);                    
                }
            }
        }
    }
}

app.component("optionsTab",
    {
        controller: OptionsTabController,
        templateUrl: "options-tab/options-tab.html",
        controllerAs: "ctrl"
    }
);