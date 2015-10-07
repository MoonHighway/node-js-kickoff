var waitTime = 3000;
var currentTime = 0;
var percentWaited = 0;
var waitInterval = 100;

function writeWaitingPercent(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

setTimeout(function () {

    clearInterval(interval);
    writeWaitingPercent(100);
    process.stdout.write('\n\n\n');

}, waitTime);

var interval = setInterval(function () {

    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime / waitTime) * 100);
    writeWaitingPercent(percentWaited);

}, waitInterval);


process.stdout.write('\n\n');
writeWaitingPercent(percentWaited);