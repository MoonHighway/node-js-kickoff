http.Server
===========
[Presentation (6, 7)](https://docs.google.com/a/moonhighway.com/presentation/d/1BC3CrRWqiKvDYXU6y2_cVegLdZ9WMkYAXdR2OaJNIcI/edit#slide=id.g33becb33d_00)
One of the most powerful features of Node js is the ability to create http servers.  You can program one file... in javascript...
that can act as a webserver on any machine running Node js.  Servers are a part of the http module that comes with Node js.

http.createServer
-----------------
Creates a new instance of a server. The server then listens on a given port and ip address.
[HTTP](http://nodejs.org/api/http.html)


http.ServerRequest
------------------
An object representing the request, contains url, all request headers, and any data or files sent with the request.

http.ServerResponse
-------------------
A object that handles the server's response.
[resonse status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Response_codes)

* http status codes


Serving Text
-------------

```javascript
    http.createServer(function (req, res) {

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Simple Text\n\r\n\rServer...');

    }).listen(3000);
```

Serving Html
-------------

```javascript
    http.createServer(function (req, res) {

        var html = "<!DOCTYPE html><html><head><title>HTML Files</title></head><body><h1>Served from '"
            + req.url
            + "'</h1></body></html>";

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);

    }).listen(3001);
```

Serving JSON with CORS
----------------------

```javascript
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
```

Serving Files
-------------

```javascript
    fs.readFile(url, 'UTF-8', function (err, data) {

        if (err) {
            throw err;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);

    });

```

Serving Binary
--------------

```javascript
    fs.readFile(img, function (err, data) {

        if (err) {
            throw err;
        }

        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data);

    });
```

Citations
---------

####Leroy Brown JPG
Sample Image from Deviant Art
* [Deviant Art](http://www.deviantart.com/)
* [Leroy Brown JPG](http://obscuremailman.deviantart.com/art/Big-Bad-Leroy-Brown-186914374)