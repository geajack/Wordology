class RootController
{
    constructor($scope)
    {
        this.$scope = $scope;
        this.OM = new OptionsManager();
        this.tab = "options";
        this.selectedProfile = null;
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
        var name = prompt("Enter new profile name:");
        await this.OM.createProfile(name);
        this.reloadProfiles();
    }

    async onClickRenameProfile()
    {
        var name = prompt(`Enter new profile name for "${this.selectedProfile.name}":`);
        await this.OM.renameProfile(this.selectedProfile.id, name);
        this.reloadProfiles();
    }

    async onClickDeleteProfile()
    {
        var response = confirm("Definitely delete profile?");
        if (response === true)
        {
            await this.OM.deleteProfile(this.selectedProfile.id);
            this.reloadProfiles();
        }
    }
}

app.controller("RootController", RootController);