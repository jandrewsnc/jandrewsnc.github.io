var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/styles.scss'])
  .pipe(sass())
  .pipe(gulp.dest("src/css"))
  .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js'])
  .pipe(gulp.dest("src/js"))
  .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

browserSync.init({
  server: {
    baseDir: "./"
  }
});

gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.series('sass'));
  gulp.watch("*.html").on('change', browserSync.reload);
}));

gulp.task("default", gulp.series("js", "serve"));
