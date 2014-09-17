var http = require('http'),
    fs = require('fs');

var options = {
    hostname: 'en.wikipedia.org',
    port: 80,
    path: '/wiki/Mchammer',
    method: 'GET'
};

var req = http.request(options, function(res) {

    var responseBody = "";

    console.log("Response from server started.");
    console.log('Server status: %s', res.statusCode);
    console.log('Response headers: %j', res.headers);

    res.setEncoding('utf8');

    res.once('data', function(chunk) {
       console.log(chunk);
    });

    res.on('data', function (chunk) {
        console.log("--chunk--" + chunk.length);
        responseBody += chunk;
    });

    res.on('end', function() {

        fs.appendFileSync('mc-hammer.html', responseBody);

        console.log("Response from the server done.");

    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

req.end();
