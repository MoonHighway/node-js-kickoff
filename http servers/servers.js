var http = require('http'),
    fs = require('fs');

/**
 * Text Server
 */
http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Simple Text\n\r\n\rServer...');

}).listen(3000);

/**
 * HTML Server
 */
http.createServer(function (req, res) {

    var html = "<!DOCTYPE html><html><head><title>HTML Files</title></head><body><h1>Served from '"
        + req.url
        + "'</h1></body></html>";

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);

}).listen(3001);

/**
 * JSON Server
 */
http.createServer(function (req, res) {

    var people = [
            {
                first: 'Leroy',
                last: 'Brown'
            },
            {
                first: 'Paul',
                last: 'Bunyan'
            }
        ];

    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
        'Content-Type': 'text/json'
    });
    res.end(JSON.stringify(people));

}).listen(3002);

/**
 * File Server
 */
http.createServer(function (req, res) {

    fs.readFile('./html/index.html', 'UTF-8', function (err, data) {

        if (err) {
            throw err;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);

    });

}).listen(3003);

/**
 * Img Server
 */
http.createServer(function (req, res) {

    fs.readFile('./img/leroy-brown.jpg', function (err, data) {

        if (err) {
            throw err;
        }

        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data);

    });

}).listen(3004);

console.log("All Servers are running on ports 3000 - 3004");
