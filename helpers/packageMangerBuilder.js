(function() {
    'use strict';

    var packageJson = {
        'name': 'generatorApp',
        'version': '1.0.0',
        'description': 'An app that generates files',
        'main': 'main.js',
        'scripts': {
            'postinstall': 'bower install'
        },
        'author': 'Chris Carter',
        'license': 'ISC',
        'dependencies': {
            'body-parser': '*',
            'bower': '*',
            'express': '*'
        }
    };

    var bowerJson = {
        'name': 'sample-app-built',
        'description': 'A sample application built',
        'main': 'main.js',
        'authors': [],
        'license': 'ISC',
        'homepage': '',
        'private': true,
        'ignore': [
            '**/.*',
            'node_modules',
            'bower_components',
            'test',
            'tests'
        ],
        'dependencies': {
            'jquery': '*',
            'angular': '*',
            'angular-mocks': '*',
            'bootstrap': '*'
        }
    };

    function changeName (newName) {
        packageJson.name = newName;
        bowerJson.name = newName;
    };

    function changeVersion (newVersion) {
        packageJson.version = newVersion;
    };

    function changeDescription (newDescription) {
        packageJson.description = newDescription;
        bowerJson.description = newDescription;
    };

    function changeAuthor (newAuthor) {
        packageJson.author = newAuthor;
        bowerJson.authors.push(newAuthor);
    };

    module.exports = {
        changeName: function (newName) { changeName(newName) },
        changeVersion: function (newVersion) { changeVersion(newVersion) },
        changeDescription: function (newDescription) { changeDescription(newDescription) },
        changeAuthor: function (newAuthor) { changeAuthor(newAuthor) },
        buildPackageJsonFile: function () {
            return JSON.stringify(packageJson, null, '\t');
        },
        buildBowerJsonFile: function () {
            return JSON.stringify(bowerJson, null, '\t');
        }
    };

}());
