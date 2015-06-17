var http = require('http'),
    fs = require('fs');

var options = {
    hostname: 'topics.nytimes.com',
    port: 80,
    path: '/top/reference/timestopics/subjects/a/avalanches/index.html',
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
        fs.writeFile('avi-article.html', responseBody, function(err) {
            if (err) {
                throw err;
            }
            console.log("File Downloaded");
        });
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

req.end();
