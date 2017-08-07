var gulp   = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  jshint = require('gulp-jshint');


// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task

gulp.task('build-js', function() {
  return gulp.src('js/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('jshint', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  console.log("I AM THE ONE WHO WATCHES");
  gulp.watch('js/**/*.js', ['build-js']);
  gulp.watch('js/**/*.js', ['jshint']);
});
