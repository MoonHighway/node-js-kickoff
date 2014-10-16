var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();
var count = 0;

event.on("customEvent", function (message, count) {
    console.log(count + " custom: ", message);
});

process.stdin.on('data', function (data) {

    var input = data.toString().toLowerCase().trim();

    if (input === 'exit') {
        process.exit();
    }

    event.emit("customEvent", input, ++count);

});

process.on('exit', function () {

    console.log('leaving after ' + count + ' events were emitted');

});
