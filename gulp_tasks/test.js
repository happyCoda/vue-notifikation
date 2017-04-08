let Server = require('karma').Server,
  path = require('path');

module.exports = (done) => {
  new Server({
    configFile: path.resolve(`${__dirname}/../karma.conf.js`)
  }, () => {
    // Workaround this problem: https://github.com/karma-runner/gulp-karma/issues/3
    process.exit();
  }).start();
};
