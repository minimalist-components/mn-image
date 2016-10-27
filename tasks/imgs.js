import gulp from 'gulp';
// import imagemin from 'gulp-imagemin';
import {imgs} from './config.js';

gulp.task('imgs', imgsTask);

function imgsTask() {
  // const options = {
  //   progressive: true,
  //   interlaced: true,
  // };

  return gulp
    .src(imgs.src)
    // .pipe(imagemin(options))
    .pipe(gulp.dest(imgs.dest));
}
