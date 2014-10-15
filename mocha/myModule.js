var http = require('http');

exports.printName = function (person) {
    return person.lastName + ", " + person.firstName;
};


exports.webRequest = function (url, callback) {
    http.get(url, function (res) {
        var body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            callback(body);
        });

    });
};
