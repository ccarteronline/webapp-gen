# webapp-gen
Generate a NodeJS web application for users. Use command prompt to generate a basic web app.

### Installation
```sh
$ npm install
```
### Generating Web Apps
Run the following command to start up webapp-gen.
```sh
$ node main
```
A series of prompts will appear asking for the the app name, description, version number and author. Similar to running `npm init` to generate your own `package.json` file. Webapp-gen builds a `package.json` file and a `bower.json` file as pre configured package managers.

### Using the Generated App
After a successful build, the web app resides in the `gen-apps` folder. If you have created more than one, there will be a folder for each. To use an app right away, navigate to its directory and install its dependencies. Then run the command to start the express app.
```sh
$ cd gen-apps/my-generated-app-name/
$ npm install
$ node main
```
The generated web app (`my-generated-app-name`) is being served at: `localhost:8800`

### Zip up your apps
You can create a `.zip` copy of the `gen-apps` folder where your apps reside.
```sh
$ gulp zip
```

### Frameworks and Libraries
Generated web apps use the following:
  - Node
  - Express
  - Angular
  - Bootstrap
