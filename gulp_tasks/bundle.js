let gulp = require('gulp'),
  util = require('gulp-util'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  derequire = require('browserify-derequire'),
  vueify = require('vueify'),
  eslintify = require('eslintify'),
  uglifyify = require('uglifyify'),
  babelify = require('babelify'),
  watchify = require('watchify'),
  config = require('../config');

const PUBLIC_PATH = config.PUBLIC_PATH;
const BUILD_PATH = `${PUBLIC_PATH}/dest`;
const PLUGIN_FILE_NAME = 'vue-notifikation.js';

function bundle(b, done) {
  let startBundle = Date.now();

  util.log('Bundling js...');
  b.bundle()
  .on('error', (err) => {
    util.log(util.colors.red(err));
  })
  .on('end', () => {
    let finishBundle = Date.now();

    util.log(`JS bundle finished in ${util.colors.green((finishBundle - startBundle) + ' ms')}`);

    if (done) {
      done();
    }
  })
  .pipe(source(done ? PLUGIN_FILE_NAME : 'bundle.js'))
  .pipe(gulp.dest(done ? BUILD_PATH : `${PUBLIC_PATH}/example/js/dest`));
}

module.exports = (watch, done) => {
  let b = browserify({
      basedir: watch ? `${PUBLIC_PATH}/example` : PUBLIC_PATH,
      entries: watch ? `js/src/main.js` : `src/index.js`,
      cache: {},
      packageCache: {},
      standalone: 'Notifikation'
    })
    .plugin(derequire)
    .transform(eslintify)
    .transform(babelify)
    .transform(vueify),
    args = [b];

  if (watch) {
    b
    .plugin(watchify)
    .on('update', () => {
      bundle(b);
    });
  } else {
    process.env.NODE_ENV = 'production';
    b
    .transform(uglifyify, {
      global: true
    });
    args.push(done);
  }

  bundle(...args);
};
