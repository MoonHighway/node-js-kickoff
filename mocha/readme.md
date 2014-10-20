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

Installing Cheerio
-----------------
Cheerio is a DOM parser that works a lot like a lightweight version of jQuery.

```
    $ npm install cheerio
```

or

```
    $ npm install --save-dev cheerio
```

Writing myModule
----------------

```javascript
    
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

```

writing the test
----------------

```javascript
    
    var module = require('../myModule'),
        should = require('should'),
        cheerio = require('cheerio');
    
    
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
    
            module.webRequest('http://www.moonhighway.com', function(data) {
                data.should.be.ok;
                done();
            });
    
        });
    
        it('should load moonhighway\'s address', function(done) {
    
            module.webRequest('http://www.moonhighway.com', function(data) {
    
                var $ = cheerio.load(data);
                $('p.Address2').text().should.equal('Tahoe City, CA 96145');
                done();
    
            });
    
        });
    
    });


    
```


