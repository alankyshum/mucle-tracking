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
gulp.task('jsx', function () {
  // doc: https://github.com/babel/babelify
  browserify('jsx/App.jsx', {
    debug: true
  })
  .transform('babelify', {presets: ['es2015', 'react']})
  .bundle()
  .on('error', (e) => {
    console.error(e.codeFrame);
    console.error(e.toString());
    this.emit('end');
  })
  .pipe(fs.createWriteStream('public/js/App.js'));
});

// ================
// == GULP TASKS ==
// ================
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['css']);
  gulp.watch('jsx/**/*.jsx', ['jsx']);
});

gulp.task('build', ['css', 'jsx'], function () {});
