class OptionsTabController
{
    constructor($scope)
    {
        this.OM = new OptionsManager();
        this.options = null;
        this.oldOptions = null;
        this.optionsLoaded = false;
        this.prefixInput = "";
        this.suffixInput = "";
        this.$scope = $scope;
        this.OM.getOptions().then(options => {
            this.options = options;
            this.oldOptions = Object.assign({}, options);
            this.optionsLoaded = true;
            this.blacklistedPrefixes = this.options.blacklistedPrefixes.map(prefix => ({ prefix: prefix}));
            this.whitelistedSuffixes = this.options.whitelistedSuffixes.map(suffix => ({ suffix: suffix}));
            this.$scope.$digest();
        });
        
        this.prefixColumns = [
            { name: "prefix", label: "Prefix", searchable: false }
        ];
        this.suffixColumns = [
            { name: "suffix", label: "Suffix", searchable: false }
        ];
    }

    onClickAddPrefix()
    {
        console.log("Add prefix");
    }

    onClickAddSuffix()
    {
        console.log("Add suffix");
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