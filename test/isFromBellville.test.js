let isFromBellville = require('../isFromBellville');
let assert = require('assert');

describe('isFromBellville', function () {
    it('Should return false if a given car is not from Bellville', function () {
        assert.equal(false, isFromBellville('Not from Bellville'))
    });

    it('should return true if the given car is from Bellville', function () {
        assert.equal(true, isFromBellville('CY45GP'))
    });


});