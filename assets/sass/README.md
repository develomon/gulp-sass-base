# Main file

The main Sass concept and idea presented here borrows heavily from the work of [sass-boilerplate](https://github.com/HugoGiraudel/sass-boilerplate), [Sass-guidelin.es](http://sass-guidelin.es/), [css guidelines](http://cssguidelin.es/) and most importantly Inverted Triangle CSS [ITCSS](http://itcss.io/).

There is clearly the need to separate different layers of Sass code that gets compiled into one monolithic or more modular CSS files, depending on requirements of your projects.

TODO: investigate the possibility and need to separate according to media queries.

It is important to keep in mind that `@import` in imported partials is not working and it is often suggested that only one, main file should contain imports and nothing else.

>The main file (usually labelled `main.scss`) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Reference: [Sass Guidelines](http://sass-guidelin.es/) > [Architecture](http://sass-guidelin.es/#architecture) > [Main file](http://sass-guidelin.es/#main-file)

>The less CSS we have, the merrier

I will repeat some of the chapter from sass-guidelin.es but will interpret to our own preference as we will try to stick to principles but we will incorporate other principles too to form our system.

All the Sass files are separated in following folders, listed by significance, not alphabetical:

* `settings` (originally **utils**) Just variables and initialization.
* `tools` (originally **utils, vendors**) Vendor libraries and our own mixins
* `base` (originally also **base** and/or _generic_ alt **elements**) Resets and elements styling 
* `global` (partially like _layout_) Global components that always appear on every page like **header** and **footer**
* `components` Separate file for each component containing its styles
* `components/vendors` Folder to include all vendor styles for libraries like swiper.js etc 
* `pages` Overrides if some component on same page has some specifics
* `theme` Overrides if some component should be different for some reason



### Sample directory content

You files could be quite different, this is just to give you an idea and starting point, just remove, rename or rearrange what you think should be different for your particular project. If you have some more general idea that would apply universally, consider suggesting so in [issue queue](https://github.com/macmladen/gulp-sass-base/issues). 

```
sass/
|
|– settings/           ### Sass Variables
|   |– _init.scss        # Initialization of projects, mixins, libraries
|   |– _breakpoints.scss # Breakpoints and everything media queries related
|   |– _color.scss       # All used colors
|   |– _typography.scss  # Everything typography related
|   |– _variables.scss   # Maybe other unrelated and useful variables 
|   ...                  # Etc…
|
|– tools/              ### Sass Abstracts not producing anything
|   |– _functions.scss   # Own Sass Functions
|   |– _mixins.scss      # Own Sass Mixins
|   |– _placeholderss.scss # Own Sass placeholders
|   |– _mixins-1.scss    # Vendor Mixins 1 (not producing code)
|   |– _mixins-2.scss    # Vendor Mixins 2 (not producing code)
|   ...                  # Etc…
|
|– base/               ### Resets and elements styling
|   |– _normalize.scss   # Reset/normalize (making sure we are all on the same page)
|   |– _base.scss        # Very basic styles html, body and * general selector
|   |– _elements.scss    # Base elements rules, maybe separated according to function
|   |– _helpers.scss     # Various class helpers
|   |– _fonts.scss       # Fonts imports if they are done in CSS, JS may be preferrable 
|   |– _typography.scss  # Basic elemental typography styling
|   |– _layout.scss      # just layout positioning, no makeup
|   |– _grid.scss        # Grid system (not really a fun, but...)
|   ...                  # Etc…
|
|– global/             ### Components that are on all pages
|   |– _navigation.scss  # Navigation
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   ...                  # Etc…
|
|– components/         ### All components, blocks everything
|   |– _bootstrap.scss   # Bootstrap (vendor library producing code)
|   |– _jquery-ui.scss   # jQuery UI (vendor library producing code)
|   |– _forms.scss       # Forms
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– pages/              ### Specific page overrides
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– themes/             ### Specific context overrides
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   ...                  # Etc…
|
`– main.scss             # Main Sass file
```
