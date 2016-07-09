const gulp = require('gulp');
const sass = require('gulp-sass');
const react = require('gulp-react');


gulp.task('css', function () {
  return gulp.src('scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/css'));
});

gulp.task('react', function () {
  return gulp.src('jsx/**/*.jsx')
  .pipe(react())
  .pipe(gulp.dest('public/js'))
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['css']);
  gulp.watch('jsx/**/*.jsx', ['react']);
});
