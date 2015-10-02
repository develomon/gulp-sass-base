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
* `layout` (partially like _layout_) This is just for layout, maybe should be in base?
* `components` Separate file for each component containing its styles
* `pages` Overrides if some component on same page has some specifics
* `theme` Overrides if some component should be different for some reason
* ``

 This is where we will

### Sample directory content

You files could be quite different, this is just to give you an idea and starting point, just remove, rename or rearrange what you think should be different for your particular project. If you have some more general idea that would apply universally, consider suggesting so in [issue queue](https://github.com/macmladen/gulp-sass-base/issues). 

@MacMladen suggestion:

```
sass/
|
|– settings/           ### Sass Variables
|   |– _init.scss        # Initialization of projects, mixins, libraries
|   |– _layout.scss      # Layout sizes and breakpoints
|   |– _color.scss       # All used colors
|   |– _typography.scss  # Everything typography related
|   ...                  # Etc…
|
|– tools/              ### Sass Abstracts not producing anything
|   |– _mixins-1.scss    # Vendor Mixins 1
|   |– _mixins-2.scss    # Vendor Mixins 2
|   |– _functions.scss   # Own Sass Functions
|   |– _mixins.scss      # Own Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|   ...                  # Etc…
|
|– base/               ### Resets and elements styling
|   |– _normalize.scss   # Reset/normalize (making sure we are all on the same page)
|   |– _bootstrap.scss   # Bootstrap (vendor library producing code)
|   |– _jquery-ui.scss   # jQuery UI (vendor library producing code)
|   |– _elements.scss    # Base elements rules, maybe separated according to function
|   ...                  # Etc…
|
|– layout/             ### Not sure if it should be in base
|   |– _layout.scss      # just layout positioning, no makeup
|   |– _grid.scss        # Grid system (not really a fun, but...)
|
|– global/             ### Components that are on all pages
|   |– _navigation.scss  # Navigation
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   ...                  # Etc…
|
|– components/         ### All components, blocks everything
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

Original Sass-boilerplate suggestion

```
sass/
|
|– base/
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # Typography rules
|   ...                  # Etc…
|
|– components/
|   |– _buttons.scss     # Buttons
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cover
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layout/
|   |– _navigation.scss  # Navigation
|   |– _grid.scss        # Grid system
|   |– _header.scss      # Header
|   |– _footer.scss      # Footer
|   |– _sidebar.scss     # Sidebar
|   |– _forms.scss       # Forms
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Home specific styles
|   |– _contact.scss     # Contact specific styles
|   ...                  # Etc…
|
|– themes/
|   |– _theme.scss       # Default theme
|   |– _admin.scss       # Admin theme
|   ...                  # Etc…
|
|– utils/
|   |– _variables.scss   # Sass Variables
|   |– _functions.scss   # Sass Functions
|   |– _mixins.scss      # Sass Mixins
|   |– _helpers.scss     # Class & placeholders helpers
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– main.scss             # Main Sass file
```
