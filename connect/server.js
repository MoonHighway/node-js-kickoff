var connect = require('connect');

/**
 * npm install connect@2.25.0
 * Website that serves static files form the public and logs request to the console
 * @type {Server}
 */
var app = connect()
    .use(function(req, res, next) {
        console.log("Request Made For: " + req.url);
        next();
    })
    .use(connect.static('public'));

app.listen(3000);

console.log("Files being served on 3000");
