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

This repository should be the base of your project. As such it has some things you may not need so feel free to delete whatever you do not need.

You need to `git clone https://github.com/macmladen/gulp-sass-base.git` **only** in case you want to work on this project, contribute. Otherwise you do not need branches and history of this project, so just download the archive and expand it.

Where will you put it depends on you, put it where it fits best to your workflow.

Folders:

* `assets` this holds the sources to your project. That is **sass**, **js**, images and other source files that will be used by build system to produce development or production ready version that will be output in `public`.
* `doc` will hold extensive documentation on general node, gulp, sass stuff, coding standards/recommendation, and current project documentation.
* `gulp-tasks` have all available gulp tasks and their configurations separated into individual files. 
* `legacy` holds **gulpfile.js** and its **package.json** which could be put into any legacy project which already has its own structure and was previously build with gem based tools. It should be capable to replace `compass compile` with `gulp sass` but project has to follow guidelines in its [README.md](legacy/README.md). 
* `node_modules` will appear only after `npm install` and will hold node modules that are involved in build procedures by `gulp`. They should be excluded from git repository as they are build with each new project.
* `public` will appear after first build by `gulp` to hold the result of build. It is also called **destination** folder or **dist**, meaning it holds actual HTML, CSS and other stuff that we build. 
* `tools` have utilities that could help you in some tasks. At the moment there are two tools to evaluate and compare CSS files in order to check differences between `ruby` based build and `node`.
* `vendor` will appear only after `bower` installs components, usually some CSS or JS libraries or other resources if needed. It is an source asset that could be used by build process or otherwise.
* `.bowerrc` you could configure `bower` to use any folder you wish, if it is left it defaults to `bower_components`
* `.gitignore` you should change it to suit your project
* `bower.json` installs components you need. It could install it by `bower install` or as a part of `npm` post install script.
* `gulpfile.js` just calls all tasks in `gulp-tasks` so it should not be changed. Make new or edit existing files in `gulp-tasks`
* `package.json` holds modules list needed for project. If you need to add something new, the best way to do it is to use `npm install --save-dev your-favourite-module-on-npmjs

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

Now that we have npm installed and tested, bower is installed with npm. You need bower only if there is a need for bower downloaded components, libraries or frameworks, otherwise you may skip this.

**CAVEAT:** do not lose patience as bower may take quite some time to install. If you did managed with wget, that means internet connection is OK and it is just taking too long.

```
$ sudo npm install --global bower
```

`npm` packages can be installed **globally** (probably in `/usr/local/lib/node_modules/` with `-g` or `--global` when we must use sudo) or **locally** in `./node_modules`. The main difference is that globally installed ones are those that are needed as command line tools such as bower, gulp, etc.

Local installations may also be run with from `./node_modules/.bin/` so you can run local gulp (or other tools) with
 
```
./node_modules/.bin/gulp
```

We will install just one more and that is **gulp** task runner also as global for easier use:

```
$ sudo npm install -g gulp
```

If you wish to see what is globally installed

```
$ npm list -g -depth 0
```

This will list all globally installed npm packages (-g) that are available on the system to any project. It will not list their installed dependencies (-depth 0) just the main packages.

These may not be globally installed but that really helps shortening and simplifying commands. Some purists insist that **each** project is run in its own environment and its own local gulp and other dependencies. We don't insist on anything. Do it your way as long as it works for you.

## Setting up project

This is meant to be boilerplate for new projects that are going to use node / gulp based workflow and some Sass guidelines.

There are actually two ways you can use files found in this boilerplate:

* In a legacy project
* In new project based on these suggestions

Both options assume that basic tools are already installed, the only difference is what going to be used and how. 

### Using `legacy`

If you have some project that is already developed and all you want is faster compiling or just testing how `gulp` and `libsass` are performing, all you have to do is to take files from `/legacy` folder and put them where `config.rb` file is or in parent folder of Sass and CSS.

You need to install modules and to change `gulpfile.js` to fit your environment (source and target names) and options you need and to start compile or watch.

```
# Installing modules
npm install

# ...edit gulpfile.js

# Compile Sass
gulp sass

# Watch for change and compile
gulp
```

### Creating new project

If you are starting a new project and want to embrace ideas and workflow presented here then you should write your Sass files in `assets/sass` folders and put fonts, media, icons into their folders.

`gulp` will compile Sass, generate source maps, optimize images, inline fonts, resolve media urls, generate icon font and perform linting.

Tasks are configured by default to take source from `assets` and to output to `public`.

Steps are the same as in prevous step:

```
# Installing modules
npm install

# ...edit gulpfile.js

# Compile Sass
gulp sass

# Watch for change and compile
gulp
```

### Running `gulp` task runner

`gulp` command is issued from the folder where `gulpfile.js` resides and it handels sources (assets) relatively to itself which can be read from `gulp-tasks/_config.js` and other files.

`gulp` commands are defined in `gulp-tasks` files themselves in line

```
gulp.task('sass', function() {
  ...
```

Currently we have `gulp sass`, task that just compiles and `gulp` that starts default task (in `_defaul.js`) which compiles and watch for changes.
 
Other tasks will be added soon.

## Sass Boilerplate

This is a sample project using the [7-1 architecture pattern](http://sass-guidelin.es/#architecture) and sticking to [Sass Guidelines](http://sass-guidelin.es) writing conventions.

Each folder of this project has its own `README.md` file to explain the purpose and add extra information. Be sure to browse the repository to see how it works.

All Sass files are in `assets/sass` and compiles to `public/css` and that is configured at `gulp-tasks/_config.js`.
