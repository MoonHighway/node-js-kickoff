var EventEmitter = require('events').EventEmitter;

var Person = function(name){
    this.name = name;
};
Person.prototype = new EventEmitter();

var Leroy = new Person("Leroy Brown");

Leroy.on('speak', function(say) {
    console.log("Hey mannnn, " + say);
});

Leroy.emit('speak', "what's shaking?");
