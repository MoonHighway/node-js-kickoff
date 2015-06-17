var http = require('http'),
    fs = require('fs');

var options = {
    hostname: 'topics.nytimes.com',
    port: 80,
    path: '/top/reference/timestopics/subjects/a/avalanches/index.html',
    method: 'GET'
};

var req = http.request(options, function(res) {

    res.on('data', function (chunk) {
        fs.appendFile('avi-binary.html.download', chunk);
    });

    res.on('end', function () {
        fs.rename('avi-binary.html.download', 'avi-binary.html');
    });

});


req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

req.end();
