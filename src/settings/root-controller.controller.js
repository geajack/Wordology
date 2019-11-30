class RootController
{
    constructor($scope)
    {
        this.$scope = $scope;
        this.OM = new OptionsManager();
        this.tab = "options";
        this.selectedProfile = null;
        this.OM.getGlobalOptions().then(
            options => {
                this.selectedLanguage = options.language;
                this.strings = WordologyStrings.getStrings(options.language);
            }
        );
        this.reloadProfiles();
    }

    async reloadProfiles()
    {
        var listOfProfiles = await this.OM.getProfiles();
        this.profiles = listOfProfiles;
        var profileId = await this.OM.getCurrentProfileId();
        if (profileId !== null)
        {
            this.selectedProfile = this.profiles.filter(profile => profile.id === profileId)[0];
        }
        else
        {
            this.selectedProfile = null;
        }
        this.$scope.$digest();
        this.$scope.$broadcast("reload");
    }

    async languageChanged()
    {
        await this.OM.setGlobalOption("language", this.selectedLanguage);
        this.strings = WordologyStrings.getStrings(this.selectedLanguage);
        this.$scope.$digest();
    }

    async profileChanged()
    {
        if (this.selectedProfile)
        {
            this.OM.setCurrentProfile(this.selectedProfile.id);
        }
        this.$scope.$broadcast("reload");
    }

    async onClickAddProfile()
    {
        var name = await this.showPrompt(this.strings.ADD_PROFILE);
        if (name)
        {
            var newId = await this.OM.createProfile(name);
            await this.OM.setCurrentProfile(newId);
            this.reloadProfiles();
        }
    }

    async onClickRenameProfile()
    {
        var name = await this.showPrompt(this.strings.RENAME_PROFILE(this.selectedProfile.name));
        if (name)
        {
            await this.OM.renameProfile(this.selectedProfile.id, name);
            this.reloadProfiles();
        }
    }

    async onClickDeleteProfile()
    {
        var response = await this.showPrompt(this.strings.DELETE_PROFILE_WARNING(this.selectedProfile.name));
        if (response === this.strings.DELETE_PASSWORD)
        {
            await this.OM.deleteProfile(this.selectedProfile.id);
            Dictionary.deleteDatabase(this.selectedProfile.id);
            this.reloadProfiles();
        }
    }

    async showPrompt(message)
    {
        vex.dialog.buttons.YES.text = this.strings.OK;
        vex.dialog.buttons.NO.text = this.strings.CANCEL;
        return new Promise(
            resolve => {
                vex.dialog.prompt({message: message, callback: resolve});
            }
        );
    }
}

app.controller("RootController", RootController);