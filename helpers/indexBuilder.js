(function() {
    'use strict';
    var appName;

    module.exports = {
        buildIndexFile: function (appName) {
            var index =
`<!DOCTYPE html>
<html>
    <head>
        <title>` + appName + `</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bower_components/jquery/dist/jquery.min.js"></script>
        <script src="/bower_components/angular/angular.min.js"></script>
        <script src="/js/app.js"></script>
        <script src="/js/controllers/testCtrl.js"></script>
    </head>
    <body ng-app="` + appName + `">
        <!-- <div class="testComponent" ng-controller="TestComponentCtrl as vm">
            <b>Hero</b><br>
            <hero-detail hero="vm.hero" text="Enter Text here"></hero-detail>
        </div> -->
        Hello World!
    </body>
</html>
`;
            return index;
        }
    }
}());
