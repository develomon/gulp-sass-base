# gulp-sass-base

This is meant to be starting point for the modern front end development based on [node](http://nodejs.org/), [npm](http://npmjs.com/), [libsass](http://sass-lang.com/libsass), [node-sass](https://github.com/sass/node-sass), [gulp](gulpjs.com/) task runner, [sass](http://sass-lang.com/) and [best practices](http://sass-guidelin.es/) workflow and tools.

Documentation will try to explain everything down the road that is needed, however some understanding of underlying technologies such as terminal, nodejs, Javascript will be assumed and not explained to the last detail.

If you find anything described here questionable or you think it could be improved, please file an issue or pull request, I'd be glad to accept anything that will help improve this boilerplate.

You may download or clone the whole repository, delete items you do not need or rearrange it to your own taste or workflow. **Nothing is carved in stone** as saying goes. If you do it regularly, you may better fork it and continue your way. You may be missed but the choice is yours.

This work borrows heavily from many other fine knights all around the world and I will try to reference everything in the document and in reference section at the end. If someone is missing or should be added, do not hesitate to raise the issue.

This is **active** work in progress so expect agile additions to the whole front end war chest meant to improve quality and speed of average front end John Doe. 

## Terms

**node** JavaScript runtime engine. This enables use of standard JavaScript as a scripting language just like any other that are commonly supported by OS-es like **ruby** or **python**.

**npm** **N**ode **P**ackage **M**anager which works like **gem** and **bundler** do for gem modules: it helps build environment and manage package dependencies. For building as well as updating or running it uses `package.json` configuration file. Packages available to `npm` are searched on [npm](http://npmjs.com/).

**module** application with its dependencies that is installed, used by and run by node and npm according to it's own settings and `package.json`. The folder `node_modules` is **obligatory** location.

**(whatever)-sass** are various `sass` wrappers that wrap libraries that compile `.sass` files to `.css`.
 
**libsass** is core **sass** library written and compiled as library in C. It does not work by itself. You may use and build `sassc` wrapper for command line which is useful to check if something is bad in your code or it is a `node-sass` bug. 

**node-sass** is wrapper that compiles `.sass` files to `.css` but is quite limited.

**gulp-sass** is wrapper around `node-sass` that helps facilitate `gulp` **streams** for maximum efficiency by doing all the work in *streams* which resides in memory, therefore accessing disk only once to read source and next time to produce output. Has some benefits but problems too.

**gulp** is task runner just like **guard** under `gem` or `grunt` Choice of task runner may be individual choice and each has its strengths and weaknesses.

**bower** will install dependencies from other places than [npmjs.com](http://npmjs.com/) but follow simnilar requirements as `npm` does but its configuration file is `bower.json`. It also uses hidden file `.bowerrc` where you can change default install directory. Packages available to bower are searched on [bower.io](http://bower.io/)

## Basic concept

The whole system is console (terminal) based so usage assumes elementary skills, experience and understanding of terminal. One can just use commands described here but if anything goes off road, it will be bumpy.

## Building environment

### Basic tools installation - `node` and `npm`

The most basic tools we are going to need are `node` (Javascript execution environment based of Google V8 engine) with its companion `npm` (Node Package Manager) and `bower` (frameworks, libraries, assets, utilities, and rainbows manager for the web).

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

Now that we have npm installed and tested, bower is installed with npm. **CAVEAT:** do not lose patience as bower may take quite some time to install. If you did managed with wget, that means internet connection is OK and it is just taking too long.

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

These may not be globally installed but that really helps shortening and simplifying commands. Some purists insist that **each** project is run in its own environment and its own local gulp and other dependencies. We don't insist on anything. Do it your way as long as it works for you.

### Environment setup

The whole node/npm ecosystem is based on JSON data structures and Javascript code. The separation of concerns is that bower handles libraries while npm handles modules. They both have wizard that can make empty configuration file

```
$ bower init
$ npm init
```

They will guide you through some basic question and generate empty, blank files that are ready to receive components or to be edited to accommodate your project. You do not need that here as those are already provided here.

If all you wish is just to try gulp/node workflow, just to compile your existing project, take a look into `legacy` [folder](legacy/README.md) and probably `tools` [folder](tools/README.md) that can check if you are getting the same from `ruby` and `node`.  

## Running `gulp` task runner

## Sass Boilerplate

This is a sample project using the [7-1 architecture pattern](http://sass-guidelin.es/#architecture) and sticking to [Sass Guidelines](http://sass-guidelin.es) writing conventions.

Each folder of this project has its own `README.md` file to explain the purpose and add extra information. Be sure to browse the repository to see how it works.

### Using the indented syntax

This boilerplate does not provide a `.sass` version as it would be painful to maintain both versions without an appropriate build process. However, it is very easy to convert this boilerplate to Sass indented syntax.

Clone it, head into the project and then run:

```
sass-convert -F sass -T scss -i -R ./ && find . -iname "*.sass" -exec bash -c 'mv "$0" "${0%\.sass}.scss"' {} \;
```
