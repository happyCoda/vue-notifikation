let gulp = require('gulp'),
  sync = require('./sync'),
  bundle = require('./bundle'),
  config = require('../config');

const PUBLIC_PATH = config.PUBLIC_PATH;

module.exports = () => {
  let server = sync();

  bundle(true);
  gulp.watch([
    `${PUBLIC_PATH}/dest/*.js`,
    `${PUBLIC_PATH}/example/js/dest/*.js`,
    `${PUBLIC_PATH}/example/index.html`
  ]).on('change', server.reload);
};
