let Server = require('karma').Server,
  path = require('path');

module.exports = (done) => {
  new Server({
    configFile: path.resolve(`${__dirname}/../karma.conf.js`)
  }, done).start();
};
