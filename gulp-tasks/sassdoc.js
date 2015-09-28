// -----------------------------------------------------------------------------
// Sass documentation generation
// -----------------------------------------------------------------------------
var gulp         = require('gulp');

gulp.task('sassdoc', function () {
  return gulp
    .src(input)
    .pipe(sassdoc(sassdocOptions))
    .resume();
});
