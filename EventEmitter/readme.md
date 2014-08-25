EventEmitter
============
The node js EventEmitter allows us to add event handlers to objects and emit events.  Any object that handles or 
emits events extends the EventEmitter.

Topics
------
* Using EventEmittr
* Emitting Events
* Handling Events
* Passing Parameters
* Extending Objects with EventEmitter


###Emiting Custom Events
```javascript
    var EventEmitter = require('events').EventEmitter;
    
    var event = new EventEmitter();
    
    event.on("customEvent", function(message) {
        console.log(message);
    });
    
    event.emit("customEvent", "Emitted a custom event");
    
```

###Creating EventEmitter Objects
```javascript
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

    
```