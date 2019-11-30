const app = angular.module("app", ["ngTable"]);

app.filter("trust",
    function ($sce) {
        return (html => $sce.trustAsHtml(html));
    }
);