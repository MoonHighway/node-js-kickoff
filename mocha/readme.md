Unit Testing
============
There are many options when it comes to unit testing. There are frameworks that support both TDD and BDD.  Even though
each testing framework is different, they all do the same thing.  You create tests, write assertions, and run tests.

The Process
-----------
1. Create a Test
2. Write code to meet the test
3. Run the Test


Mocha
-----
Mocha is a test runner for Node js.

###Installing Mocha

```
    $ npm install mocha
```

or

```
    $ npm install --save-dev mocha
```

or

```
    $ sudo npm install -g mocha
```

###Creating Test Directory
ALl tests must be named __filename-spec.js__ and placed in the test folder

Installing Should
-----------------
[Should js on GitHub](https://github.com/visionmedia/should.js/)
Should js is an assertion library for node js.  Should extends the prototypes of core JavaScript objets.  This is dangers
but since it will only do this while we run tests it will be ok.

```
    $ npm install should
```

or

```
    $ npm install --save-dev should
```

Writing myModule
----------------

```javascript
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
```

writing the test
----------------

```javascript
    
    var module = require('../myModule'),
        http = require('http'),
        should = require('should');
    
    
    describe('myModule', function() {
    
        this.timeout(5000);
    
        it('should printName', function() {
    
            var person = {
              firstName: 'Leroy',
              lastName: 'Brown'
            };
        
            var result = module.printName(person);
    
            result.should.equal(person.lastName + ", " + person.firstName);
        });
    
        it('should webrequest', function(done) {
    
            module.webResuest('http://www.moonhighway.com', function(data) {
                data.should.be.ok;
                data.length.should.be.above(0);
                done();
            });
    
        });
    
    
    });

    
```


