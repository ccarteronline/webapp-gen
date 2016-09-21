(function() {
    'use strict';
    var prompt = require('prompt');
    var fs = require('fs');
    var mkdirp = require('mkdirp');
    var packageJsonBuilder = require('./packageMangerBuilder');
    var mainBuilder = require('./mainBuilder');
    var indexBuilder = require('./indexBuilder');
    var moduleBuilder = require('./moduleBuilder');
    var ctrlBuilder = require('./ctrlBuilder');
    var cssBuilder = require('./cssBuilder');
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
                    message: 'Use lower case or dashes (my-app)',
                    pattern: /^[a-z\-]+$/,
                    required: true
                },
                version: {
                    description: ('Enter the version of your app (Version: '+app.version+')'),
                    type: 'string',
                    message: 'Example: 1.0.0',
                    pattern: /^(\d+\.)?(\d+\.)?(\*|\d+)$/,
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
                    pattern: /^[a-zA-Z\s\-]+$/,
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
        var path = 'gen-apps/'+app.name;

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
        var path = 'gen-apps/' + app.name;

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
        var path = 'gen-apps/' + app.name + '/public';

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

                // Build js folder
                mkdirp(path+'/js/controllers', function (err) {
                    if (err) {
                        return console.log(err);
                    } else {
                        // Build inner app.js file
                        fs.writeFile((path + '/js/app.js'), moduleBuilder.buildAppModule(app.name), function (err) {
                            if (err) {
                                return console.log(err);
                            } else {
                                console.log('Created: app.js file');
                            }
                        });

                        // Build out an angular controller
                        fs.writeFile((path + '/js/controllers/testCtrl.js'), ctrlBuilder.buidCtrlFile(app.name), function (err) {
                            if (err) {
                                return console.log(err);
                            } else {
                                console.log('Created: testCtrl.js file');
                            }
                        });
                    }
                });

                // Build css folder
                mkdirp(path+'/css', function (err) {
                    if (err) {
                        return console.log(err);
                    } else {
                        // Build out custom css file
                        fs.writeFile((path + '/css/main.css'), cssBuilder.buildCss(), function (err) {
                            if (err) {
                                return console.log(err);
                            } else {
                                console.log('Created: main.css file');
                            }
                        });
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
