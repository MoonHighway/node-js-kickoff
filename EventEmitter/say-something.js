var EventEmitter = require('events').EventEmitter;

var Person = function (name, sayings) {

    var p = this;

    p.name = name;
    p.sayings = sayings;

    setInterval(function () {
        p.emit('speak', p.saySomething());
    }, 750);

};

Person.prototype = new EventEmitter();
Person.prototype.saySomething = function () {
    return this.sayings[Math.floor(Math.random() * this.sayings.length)];
};


var Leroy = new Person("Leroy Brown", [
    "What's Shaking?",
    "I'm all out of Razor Blades!",
    "Ain't nobody badder than me",
    "Did you know they wrote a song about me?",
    "That ain't pizza!",
    "That Junk Yard Dog ain't mean!",
    "Who is King Kong anyways"
]);

Leroy.once('speak', function (say) {
    console.log("Leroy Brown won't shut up!");
});

Leroy.on('speak', function (say) {
    console.log("Say mannnn, " + say);
});



