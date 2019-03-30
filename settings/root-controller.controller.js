class RootController
{
    constructor($scope)
    {
        this.$scope = $scope;
        this.OM = new OptionsManager();
        this.tab = "options";
        this.OM.getProfiles().then(
            listOfProfiles => {
                this.profiles = listOfProfiles;
                this.$scope.$digest();
            }
        );
        this.OM.getCurrentProfileId().then(
            profileId => {
                this.selectedProfile = this.profiles.filter(profile => profile.id === profileId)[0];
                this.$scope.$digest();
            }
        );
        this.selectedProfile = null;
    }

    async profileChanged()
    {
        this.OM.setCurrentProfile(this.selectedProfile.id);
        this.$scope.$broadcast("reload");
    }

    onClickAddProfile()
    {

    }

    onClickRenameProfile()
    {

    }

    onClickDeleteProfile()
    {

    }
}

app.controller("RootController", RootController);