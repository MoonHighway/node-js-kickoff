var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {

    if (req.method === 'GET') {

        var htmlForm = '<!DOCTYPE html><html><head><title>Post Body Example</title><style>label { display: block; }</style>'
            + '</head><body><h1>Fill out the Form</h1><form action="/" method="post" enctype="multipart/form-data">'
            + '<div><label for="fav-color">Ski Jacket Color</label><input type="color" id="fav-color" name="fav-color"/></div>'
            + '<div><label for="stoke-level">Stoke Level</label>Super Bummed <input type="range" id="stoke-level" name="stoke-level" min="1" max="10" step="1"/> Hella Stoked</div>'
            + '<div><input type="file" id="upload-file" name="upload-file" /></div>'
            + '<div><button>Post Form</button></div>'
            + '</form></body></html>';

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(htmlForm);

    } else if (req.method === 'POST') {

        var body = '';

        req.on('data', function (chunk) {
            body += chunk;
        });

        req.on('end', function () {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(body);
        });

    }

}).listen(3000);

console.log("Server running on port 3000");
