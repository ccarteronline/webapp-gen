(function() {
    'use strict';
    var prompt = require('prompt');
    var fs = require('fs');
    var mkdirp = require('mkdirp');
    var app = {
        name: 'my-app',
        version: '0.0.0',
        description: 'A short description',
        author: 'Chris Carter'
    };

    function build () {
        createNameAndVersion();
    };

    function createNameAndVersion () {
        var that = this;
        var schema = {
            properties: {
                name: {
                    description: ('Enter the name of your app ('+app.name+')'),
                    type: 'string',
                    message: 'Use lower case and dashes (my-app)',
                    required: true
                },
                version: {
                    description: ('Enter the version of your app (Version: '+app.version+')'),
                    type: 'string',
                    message: 'Example: 1.0.0',
                    required: true
                },
                description: {
                    description: 'Provide a short description of your app',
                    type: 'string',
                    message: 'Please provide a description',
                    required: true
                },
                author: {
                    description: 'Who is the author? ('+app.author+')',
                    type: 'string',
                    message: 'Please provide an author',
                    required: true
                }
            }
        };

        prompt.get(schema, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                // Set app name and version
                app.name = result.name;
                app.version = result.version;
                app.description = result.description;
                app.author = result.author;
                buildPackageManagers();
            }

        });

        prompt.start();
    };

    function buildPackageManagers () {
        var path = 'dist/'+app.name;
        var packageJsonBuilder = require('./packageMangerBuilder');
        // Make the app directory
        mkdirp(path, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Created App folder..');
                // Set options in package files.
                packageJsonBuilder.changeName(app.name);
                packageJsonBuilder.changeVersion(app.version);
                packageJsonBuilder.changeDescription(app.description);
                packageJsonBuilder.changeAuthor(app.author);
                // Write package.json file.
                fs.writeFile((path + '/package.json'), packageJsonBuilder.buildPackageJsonFile(), function (err) {
                    if (err) {
                        return console.log(err);
                    } else {
                        console.log('Created: package.json file');
                    }
                });
                // Write bower.json file.
                fs.writeFile((path + '/bower.json'), packageJsonBuilder.buildBowerJsonFile(), function (err) {
                    if (err) {
                        return console.log(err);
                    } else {
                        console.log('Created: bower.json file');
                        buildMainFile();
                    }
                });
            }
        });
    };

    function buildMainFile () {
        var path = 'dist/' + app.name;
        var mainBuilder = require('./mainBuilder');
        fs.writeFile((path + '/main.js'), mainBuilder.buildMainFile(), function (err) {
            if (err) {
                return console.log(err);
            } else {
                console.log('Created: main.js file');
                buildPublicFilesAndFolders();
            }
        });
    };

    function buildPublicFilesAndFolders () {
        var path = 'dist/' + app.name + '/public';
        var indexBuilder = require('./indexBuilder');
        var moduleBuilder = require('./moduleBuilder');
        mkdirp(path, function (err) {
            if (err) {
                return console.log(err);
            } else {
                // build index.html file with its contents
                fs.writeFile((path + '/index.html'), indexBuilder.buildIndexFile(app.name), function (err) {
                    if (err) {
                        return console.log(err);
                    } else {
                        console.log('Created: index.html file');
                    }
                });
                // build js folder
                mkdirp(path+'/js', function (err) {
                    if (err) {
                        return console.log(err);
                    } else {
                        // build inner app.js file
                        fs.writeFile((path + '/js/app.js'), moduleBuilder.buildAppModule(app.name), function (err) {
                            if (err) {
                                return console.log(err);
                            } else {
                                console.log('Created: app.js file');
                            }
                        });

                        //TODO: Build out test angular controller
                    }
                });

                // build css folder
                mkdirp(path+'/css', function (err) {
                    if (err) {
                        return console.log(err);
                    } else {
                        // build inner css fies

                        //TODO: Build out custom css files for starter app
                    }
                });
            }
        });
    };

    // Export the build method
    module.exports = {
        build: function () { build () }
    };
}());
