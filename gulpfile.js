const gulp = require('gulp');

// === CSS ===
const sass = require('gulp-sass');
gulp.task('css', function () {
  return gulp.src('scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/css'));
});

// === JSX ===
const browserify = require('browserify');
const fs = require('fs');
gulp.task('build-app', function () {
  browserify('jsx/App.jsx')
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .pipe(fs.createWriteStream('public/js/App.js'));
});

// ================
// == GULP TASKS ==
// ================
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['css']);
  gulp.watch('jsx/**/*.jsx', ['build-app']);
});

gulp.task('build', ['css', 'build-app'], function () {});
