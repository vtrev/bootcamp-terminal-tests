let assert = require('assert');
let transportFee = require('../transportFee');

describe('transportFee', function () {

    it('Should return the correct transport fee based on the shifts you are working', function () {
        assert.equal('free', transportFee('night'));
    });

    it('Should return an error message for invalid shifts', function () {
        assert.equal('Please enter a valid shift', transportFee('some invalid shift here'));
    });

});