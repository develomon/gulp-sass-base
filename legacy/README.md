# Legacy

These two files are meant to be just inserted into legacy project and used to compile.

**CAVEAT:** `gulp` is stream based so few things will not work as they used to in `ruby` based workflow:

* Partials (files starting with underscore that does not produce output) cannot `@import` other files
* `@import` paths may be needed in configuration
* Some libraries (like **compass** which is actually **compass-mixins**) are implemented only partially (e.g. **compass** does not have sprite support) which is because those functions are implemented in `ruby` and that has to be reimplemented in JS or in mixins so test are needed to confirm everything works.

Tests that can be used are contained in `tools` directory. They require some additional modules explained in its **README** file.

Keep in mind that `gulpfile.js` settings must be changed to match your project.