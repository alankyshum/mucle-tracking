const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('css', function () {
  return gulp.src('scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['css']);
});
