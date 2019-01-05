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
                this.currentProfileId = profileId;
                this.$scope.$digest();
            }
        );
    }
}

app.controller("RootController", RootController);