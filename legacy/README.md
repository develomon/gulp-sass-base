# Legacy

These two files are meant to be just inserted into legacy project and used to compile.

You can get just those files without whole repository or git stuff:

```bash
wget --no-check-certificate https://raw.githubusercontent.com/macmladen/gulp-sass-base/master/legacy/package.json
wget --no-check-certificate https://raw.githubusercontent.com/macmladen/gulp-sass-base/master/legacy/gulpfile.js

# You may not need this two
wget --no-check-certificate https://raw.githubusercontent.com/macmladen/gulp-sass-base/master/bower.json
wget --no-check-certificate https://raw.githubusercontent.com/macmladen/gulp-sass-base/master/.bowerrc
```

Once you have them, you will have to make environment. Ensure previously that `node` and `npm` are installed as explained [previously](../README.md#basic-tools-installation---node-and-npm). When they are up and running, you need to install required modules:

```
# Install modules
npm install

# gulp compile
gulp sass
```

You can call `gulp` tasks like:

* `gulp sass` to compile project (Sass/SCSS to CSS)
* `gulp watch` to watch for change and compile
* `gulp` to compile and to continue to watch

## Bower and libraries

Some libraries and components are available on both [npm](https://npmjs.com) and [bower](https://bower.io) so they are fetched over using `npm`.

Those that are not on `npm` must be handled by bower or independently.

`bower` will be needed only if you wish **bower** fetch some components for you like some libraries that you used with `gem`. There are no exact way to translate one onto another so you will have to discover what and how yourself of post an issue.

We may include `recipes` folder to help broader audience with transition.

## Configuration compatibilities

Keep in mind that `gulpfile.js` settings must be changed to match your project. Initially, it is assumed that sass files are in `./sass` folder and produce CSS into `./css`. It is also assumed that you followed recommendations on library usage, imports and functions otherwise you will get errors you will have to solve.

Be aware that there are some differences between ruby and node requirements, imports, locations and configuration. It may take some time to make a shift and it may require reorganizing of your sass code. Your mileage may vary (considerably).

> **CAVEAT:** `gulp` is stream based so few things will not work as they used to in `ruby` based workflow:

>* Partials (files starting with underscore that does not produce output) cannot `@import` other files
* `@import` paths may be needed in configuration
* Some libraries (like **compass** which is actually **compass-mixins**) are implemented only partially (e.g. **compass** does not have sprite support) which is because those functions are implemented in `ruby` and that has to be reimplemented in JS or in mixins so test are needed to confirm everything works.

## Checking `ruby` vs `gulp` 

Tests that can be used are contained in `tools` directory. They require some additional modules explained in its **[README](../tools/README.md)** file.

For more information on `libsass`, `sassc`, `node-sass`, `gulp-sass`, `gulp` and everything about concepts or ideas contained in this base, please take a look into `doc` folder with all documentation.
