let gulp = require('gulp'),
  sequence = require('gulp-sequence'),
  config = require('./config'),
  bundle = require('./gulp_tasks/bundle'),
  sync = require('./gulp_tasks/sync'),
  dev = require('./gulp_tasks/dev'),
  test = require('./gulp_tasks/test');

const PUBLIC_PATH = config.PUBLIC_PATH;

gulp.task('bundle', (done) => {
  bundle(false, done);
});
gulp.task('test', (done) => {
  test(done);
});
gulp.task('dev', (done) => {
  dev(done);
});
gulp.task('build', sequence('test', 'bundle'));
