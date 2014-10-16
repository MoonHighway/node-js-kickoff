var http = require('http'),
    fs = require('fs');

var options = {
    hostname: 'en.wikipedia.org',
    port: 80,
    path: '/wiki/Mchammer',
    method: 'GET'
};

var req = http.request(options, function(res) {

    res.on('data', function (chunk) {
        fs.appendFileSync('mc-hammer.html', chunk);
    });

    res.on('end', function () {
        console.log("Hammer Time!");
    });

});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

req.end();
