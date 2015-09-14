# gulp-boilerplate

Starting point for front end development based on libsass, npm, sass and best practices workflow and tools.

## Building environment

### Basic tools installation

The most basic tools we need are nodejs (Javascript execution environment based of Google V8 engine) with its companion npm (Node Package Manager) and bower frameworks, libraries, assets, utilities, and rainbows manager for the web).

On Mac, you just go to home page https://nodejs.org/en/ where you will be offered standard Mac installer that install nodejs the right way on your system. You will have node and npm commands available in terminal.

Default installation (apt-get) for Linux is based on outdated version of node so the best route is to fetch latest version and install manually:

```
$ wget https://nodejs.org/download/release/latest/node-v4.0.0-linux-x64.tar.gz
$ sudo tar -C /usr/local --strip-components 1 -xzf node-v4.0.0-linux-x64
$ node -v
v4.0.0
$ npm -v
2.14.2
```

Now that we have npm installed and tested, bower is installed with npm. CAUTION: do not lose patience as bower may take quite some time to install. If you did managed with wget, that means internet connection is OK and it is just taking too long.

```
$ sudo npm install --global bower
```

npm packages can be installed globally (with -g when we must use sudo) or locally in ./node_modules. The main difference is that globally installed ones are those that are needed as command line tools such as bower, gulp, etc.

We will install just one more and that is gulp task runner also as global:

```
$ sudo npm install -g gulp
```

If you wish to see what is globally installed

```
$ npm list -g -depth 0
```

This will list all globally installed npm packages (-g) that are available on the system to any project. It will not list their installed dependencies (-depth 0) just the main packages.

### Environment setup

The whole node/npm ecosystem is based on JSON data structures and Javascript code. The separation of concerns is that bower handles libraries while npm handles modules. They both have wizard that can make empty configuration file

```
$ bower init
$ npm init
```

They will guide you through some basic question and generate empty, blank files that are ready to receive components or to be edited to accommodate your project. We will have some basic version already included in our gulp-boilerplate.

## Running `gulp` task runner

