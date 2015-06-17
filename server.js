var connect = require('./lib/node_modules/connect/index.js');
var serveStatic = require('./lib/node_modules/serve-static/index.js');
connect().use(serveStatic(__dirname)).listen(8080);
