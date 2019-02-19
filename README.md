# Express
This is a test project for setting up a JavaScript Development Environment.

Clone or download the repository on you local development environment.

# Dependencies
Mandatory: Install Node.js globally on your machine (package manager).
Optional: Globally install Local Tunnel (sharing session plugin):
```sh
$ npm install -g localtunnel
```

To start the Express server, open up the Terminal window and type:
```sh
$ node buildScripts/srcServer.js
```
or
```sh
$ npm start
```

To start a dev sharing session, start the Express server (default port: 3000), then on a new terminal window run:
```sh
$ npm start
$ lt --port 3000
```
or
or
```sh
$ npm start
$ npm run share
```

To run a security check, open up the terminal window and type:
```sh
$ npm run security-check
```
or
```sh
$ npm audit
```
