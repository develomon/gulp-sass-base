# Images

Images will be optimized for web during build.

Optimization may be tricky so it is best practice to optimize them manually while exporting them from image application.

## Image optimization with gulp

It will be implemented as a gulp command that does optimization during `gulp build` for production but also available as individual command.

(TODO)

## Image format use

Each format has its use case and rarely there could be any doubt which one should be used.

### SVG

The best choice available if there is source vector file available like `.ai` (Adobe Illustrator), `.pdf` (various sources but not necessarily always vector), `.cdr` (CorelDRAW), `.svg` (Inkscape, many other).

The main advantage is that vector format is resolution independent so the same file is used for all sizes, for retina resolutions and can be used anywhere as any other image format.  

Even if some file is already in `.svg` it should be optimized for web use which means that all additional application information and metadata should be stripped.

`.svg` can also be inlined in CSS as `data-uri` and also in HTML as XML, preferably as embedded object when one can even use CSS to style it. However, that could be seen as a hack presenting complexity so check with **technical lead** if such practice is approved.

**SVGZ** or compressed SVG is understood by browsers but servers are usually not set to serve them. The rationale is that general `gzip` serving content is already compressing them so there is no need to complicate with `.svgz`.

### PNG

This format can be used in 8 bit and 24 bit with or without transparency. Smooth transparency edge is ensured only with 24 bit format.

This is preferred to `.gif` which is legacy format and can be better optimized and used.
 
However, this format is not for everything. But to its lossless nature it is not compressed like `.jpg` is and is not optimal for color rich pictures like photos or rendered imagery.

`.png` is best suited for small drawings, graphs or logos when there is no vector version available.

If something is larger (more than 300px in width) `.jpg` should be considered.

### JPG

This most commonly used format for photos of all kinds. It is lossy format which means that every open and save reduces the quality so it is important to retain original where all derivatives are made from.

It is usually enough to have **low** quality on export (also keep in mind to strip all metadata) but if it does not introduce bigger file, higher quality may be considered like **medium** or even **high**. That is why each should be considered individually and manually.

### GIF

This is considered legacy format and should be avoided if not unavoidable. Still, only `.gif` is animated but that is so nineties! You can also consider animated `.svg`.

### WebP

This is Google format and it is not supported much by image applications and browsers other than Google Chrome, webkit based Opera and Android 44+.

### TIFF, PSD and everything else

...is not supported by browsers and must be converted to some browser supported format to be used.

