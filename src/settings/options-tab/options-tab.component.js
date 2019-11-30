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
        this.reloadOptions();

        this.prefixColumns = [
            { name: "prefix", label: "Prefix", searchable: false }
        ];
        this.suffixColumns = [
            { name: "suffix", label: "Suffix", searchable: false }
        ];

        this.onDeletePrefix = this.onDeletePrefix.bind(this);
        this.onDeleteSuffix = this.onDeleteSuffix.bind(this);

        this.$scope.$on("reload", () => this.reloadOptions());
    }

    addPrefix()
    {
        var backup = this.blacklistedPrefixes;
        this.blacklistedPrefixes = null;
        setTimeout(
            () =>
            {
                this.blacklistedPrefixes = backup;
                this.blacklistedPrefixes.push({ prefix: this.prefixInput });
                this.prefixInput = "";
                this.OM.setOption("blacklistedPrefixes", this.blacklistedPrefixes.map(row => row.prefix));
                this.$scope.$digest();
            }
        );
    }

    async reloadOptions()
    {
        try
        {
            var options = await this.OM.getOptions();
            this.options = options;
            this.oldOptions = Object.assign({}, options);
            this.optionsLoaded = true;
            this.blacklistedPrefixes = null;
            this.whitelistedSuffixes = null;
            setTimeout(
                () =>
                {
                    this.blacklistedPrefixes = this.options.blacklistedPrefixes.map(prefix => ({ prefix: prefix}));
                    this.whitelistedSuffixes = this.options.whitelistedSuffixes.map(suffix => ({ suffix: suffix}));
                    this.$scope.$digest();
                }
            );
            this.$scope.$digest();
        }
        catch
        {
            this.options = null;
            this.blacklistedPrefixes = [];
            this.whitelistedSuffixes = [];
            this.$scope.$digest();
        }
    }

    onDeletePrefix(deletedPrefix)
    {
        var newList = this.blacklistedPrefixes.map(row => row.prefix).filter(prefix => prefix !== deletedPrefix);
        this.OM.setOption("blacklistedPrefixes", newList);
    }

    onDeleteSuffix(deletedSuffix)
    {
        var newList = this.whitelistedSuffixes.map(row => row.suffix).filter(suffix => suffix !== deletedSuffix);
        this.OM.setOption("whitelistedSuffixes", newList);
    }

    addSuffix()
    {
        var backup = this.whitelistedSuffixes;
        this.whitelistedSuffixes = null;
        setTimeout(
            () =>
            {
                this.whitelistedSuffixes = backup;
                this.whitelistedSuffixes.push({ suffix: this.suffixInput });
                this.suffixInput = "";
                this.OM.setOption("whitelistedSuffixes", this.whitelistedSuffixes.map(row => row.suffix));
                this.$scope.$digest();
            }
        );
    }

    resetColorsToDefault()
    {
        var defaultColors = {
            notDefinedColor     : OptionsManager.DefaultProfileOptions.notDefinedColor,
            definedColor        : OptionsManager.DefaultProfileOptions.definedColor,
            similarColor        : OptionsManager.DefaultProfileOptions.similarColor,
            notDefinedOpacity   : OptionsManager.DefaultProfileOptions.notDefinedOpacity,
            definedOpacity      : OptionsManager.DefaultProfileOptions.definedOpacity,
            similarOpacity      : OptionsManager.DefaultProfileOptions.similarOpacity
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
        controllerAs: "ctrl",
        bindings: {
            strings: "<"
        }
    }
);