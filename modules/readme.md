Node Modules
============
Node js uses the Common js module patterns for exporting and importing modules.

Creating Modules
----------------

__counter.js__
```javascript
    
    var privateName = "Leroy Brown";
    
    function splitName() {
        return privateName.split(" ");
    }
    
    function countWords() {
        return splitName().length;
    }
    
    
    exports.name = "Counter";
    exports.description = "To learn modules";
    exports.count = countWords;
    
```

Consuming Modules
-----------------

__counter.js__
```javascript
    var counter = require('./counter');
```

__bin/counter.js__
```javascript
   var counter = require('./bin/counter');
```
   
__node_modules/counter.js__
```javascript
    var counter = require('counter');
```

Using Modules
-------------
```javascript
    var counter = require('./counter');
    
    console.log( counter.name );
    console.log( counter.description );
    console.log( counter.count() );
    
    console.log( counter.privateName );
    
```