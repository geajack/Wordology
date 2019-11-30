class RootController
{
    constructor($scope)
    {
        this.$scope = $scope;
        this.OM = new OptionsManager();
        this.tab = "options";
        this.selectedProfile = null;
        this.OM.getGlobalOptions().then(options => this.selectedLanguage = options.language);
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
        this.$scope.$broadcast("reload");
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
        var name = await this.showPrompt("Enter new profile name:");
        if (name)
        {
            var newId = await this.OM.createProfile(name);
            await this.OM.setCurrentProfile(newId);
            this.reloadProfiles();
        }
    }

    async onClickRenameProfile()
    {
        var name = await this.showPrompt(`Enter new profile name for "${this.selectedProfile.name}":`);
        if (name)
        {
            await this.OM.renameProfile(this.selectedProfile.id, name);
            this.reloadProfiles();
        }
    }

    async onClickDeleteProfile()
    {
        var response = await this.showPrompt(
            `Definitely delete profile "${this.selectedProfile.name}"? Your wordlist and settings will be gone forever.\nType DELETE (all-caps) to delete.`
        );
        if (response === "DELETE")
        {
            await this.OM.deleteProfile(this.selectedProfile.id);
            Dictionary.deleteDatabase(this.selectedProfile.id);
            this.reloadProfiles();
        }
    }

    async showPrompt(message)
    {
        vex.dialog.buttons.YES.text = "OK";
        vex.dialog.buttons.NO.text = "Cancel";
        return new Promise(
            resolve => {
                vex.dialog.prompt({message: message, callback: resolve});
            }
        );
    }
}

app.controller("RootController", RootController);