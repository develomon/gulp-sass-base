# Tools

These tools are meant to be used on command line directly. They are not sanitized but need one argument (`stat.js`) or two (`cmp.js`) which are paths to files that should produce statistics.

They both should be used from project root:

```
# Install cssstats
npm install cssstats

# compare new with old
node tools/cmp.js public/css/main.css public/old/main.css

# get statistics
node tools/stat.js public/css/main.css
```
