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
