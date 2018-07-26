let assert = require('assert');
let totalPhoneBill = require('../totalPhoneBill');
let chai = require('chai');
let chaiAssert = chai.assert;

var data = 'call, sms, call, sms, sms';


describe('totalPhoneBill', function () {
    it('Should return the total phone bill for a given usage', function () {
        assert.equal('R7.45', totalPhoneBill(data)[1])
    });

    it('Should not be less than R0', function () {
        chaiAssert.isAtLeast(totalPhoneBill(data)[0], 0, 'The total cannot be a negative number')
    });

});