var connect = require('connect'),
    http = require('http');

/**
 * Website that serves static files form the public and logs request to teh console
 * @type {Server}
 */
var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static('public'));

http.createServer(app).listen(3000);

console.log("Files being served on " + (3000));
