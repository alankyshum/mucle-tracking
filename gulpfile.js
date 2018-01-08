const gulp = require('gulp');

// === CSS ===
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
gulp.task('css', () => {
  return gulp.src('scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/css'));
});

// === JSX ===
const browserify = require('browserify');
const fs = require('fs');
gulp.task('jsx', () => {
  // doc: https://github.com/babel/babelify
  browserify('jsx/App.jsx', {
    debug: true
  })
  .transform('babelify', { presets: ['es2015', 'react'] })
  .bundle()
  .on('error', function(e) {
    console.error(e.codeFrame);
    console.error(e.toString());
    this.emit('end');
  })
  .pipe(fs.createWriteStream('public/js/App.js'));
});

// ================
// == GULP TASKS ==
// ================
gulp.task('watch', () => {
  gulp.watch('scss/**/*.scss', ['css']);
  gulp.watch(['jsx/**/*.jsx', 'lib/**/*.json'], ['jsx']);
});

gulp.task('build', ['css', 'jsx'], () => {});
