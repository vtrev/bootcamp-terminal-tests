let assert = require('assert');
let regCheck = require('../regCheck');


describe('regCheck', function () {
    it('Should return true if a registration number matches a given location', function () {
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'))
    });

    it('Should return false if the registration number does not match the given location', function () {
        assert.equal(false, regCheck('DV 23 LP GP', 'MP'))
    });


});