(() => {
    'use strict';

    let packageJson = {
        'name': 'generatorApp',
        'version': '1.0.0',
        'private': true,
        'description': 'An app that generates files',
        'main': 'main.js',
        'scripts': {
            'postinstall': 'bower install'
        },
        'author': 'Chris Carter',
        'license': 'ISC',
        'dependencies': {
            'body-parser': '^1.15.2',
            'bower': '^1.7.9',
            'express': '^4.14.0'
        },
        'devDependencies': {
          'jasmine-core': '^2.5.2',
          'karma': '^1.3.0',
          'karma-chrome-launcher': '^2.0.0',
          'karma-coverage': '^1.1.1',
          'karma-jasmine': '^1.0.2',
          'karma-phantomjs-launcher': '^1.0.2',
          'karma-spec-reporter': '0.0.26'
        }
    };

    let bowerJson = {
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
    		'jquery': '^3.1.0',
    		'angular': '^1.5.8',
    		'angular-mocks': '^1.5.8',
    		'bootstrap': '^3.3.7'
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
        changeName: (newName) => { changeName(newName) },
        changeVersion: (newVersion) => { changeVersion(newVersion) },
        changeDescription: (newDescription) => { changeDescription(newDescription) },
        changeAuthor: (newAuthor) => { changeAuthor(newAuthor) },
        buildPackageJsonFile: () => {
            return JSON.stringify(packageJson, null, '\t');
        },
        buildBowerJsonFile: () => {
            return JSON.stringify(bowerJson, null, '\t');
        }
    };

}());
