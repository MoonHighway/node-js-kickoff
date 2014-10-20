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
