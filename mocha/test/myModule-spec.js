var module = require('../myModule'),
    http = require('http'),
    should = require('should');


describe('myModule', function() {

    it('should printName', function() {

        var person = {
          firstName: 'Leroy',
          lastName: 'Brown'
        };

        person.should.be.instanceOf(Object).and.have.property('firstName', 'Leroy');

        var result = module.printName(person);

        result.should.equal(person.lastName + ", " + person.firstName);
    });

    it('should webRequest', function(done) {

        var t = setTimeout(function() {
            throw "Test Timied Out";
        }, 5000);

        module.webResuest('http://www.moonhighway.com', function(data) {
            data.should.be.ok;
            data.length.should.be.above(0);
            done();
        });

        done();
    });


});
