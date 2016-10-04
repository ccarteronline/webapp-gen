(() => {
    'use strict';

    module.exports = {
        buildIndexFile: (appName) => {
            let index =
`<!DOCTYPE html>
<html>
    <head>
        <title>` + appName + `</title>

        <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/main.css">

        <script src="/bower_components/jquery/dist/jquery.min.js"></script>
        <script src="/bower_components/angular/angular.min.js"></script>
        <script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="/js/app.js"></script>
        <script src="/js/controllers/testCtrl.js"></script>
    </head>
    <body ng-app="` + appName + `">
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="#" class="navbar-brand">` + appName + `</a>
                </div>
                <div class="navbar-collapse collapse" id="navbar">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

            </div>

        </nav>
        <div class="container mainContent" ng-controller="TestCtrl as vm">
            <h1>{{vm.introTitle}}</h1>
            <p class="lead">
                {{vm.subHeaderText}}
            </p>
            <h4>Random Messages</h4>
            <ul>
                <li ng-repeat="post in vm.list">
                    <strong>{{post.from}} said:</strong>
                    {{post.message}}
                </li>
            </ul>
        </div>
    </body>
</html>
`;
            return index;
        }
    }
}());
