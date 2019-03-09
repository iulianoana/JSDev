# JSDev
This is a test project for setting up a JavaScript Development Environment.

Clone or download the repository on you local development environment.

## Dependencies
Mandatory: Install Node.js globally on your machine (package manager).
Optional: Globally install Local Tunnel (sharing session plugin):
```sh
$ npm install localtunnel
$ npm install express
$ npm install chalk
$ npm install babel
```

## Installation
To start the Express server, open up the Terminal window and type:
```sh
$ node buildScripts/srcServer.js
```
or
```sh
$ npm start
```
To start the Express server only:
```sh
$ npm run open:src
```

To start a dev sharing session (using Localtunnel).
Start the Express server (default port: 3000), then in a new terminal window run:
```sh
$ npm start
$ lt --port 3000
```
or
```sh
$ npm start
$ npm run localtunnel
```
To start the sharing session without starting the dev server:
```sh
$ npm run share
```

To run a security check, open up the terminal window and run:
```sh
$ npm run security-check
```
or
```sh
$ npm audit
```

To end the sharring session or the dev server:
- Press CTRL + C followed by the letter Y, then hit Enter.

## Liccense
This project is [MIT](https://github.com/iulianoana/JSDev/blob/master/LICENSE) licensed.
