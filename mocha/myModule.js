var http = require('http');

exports.printName = function (person) {
    return person.lastName + ", " + person.firstName;
};


exports.webResuest = function (url, callback) {
    http.get(url, function (err, data) {
        if (err) {
            throw err;
        } else {
            callback(data);
        }
    });
};