let assert = require('assert');
let isWeekday = require('../isWeekday');


describe('isWeekday', function () {
    it('Should return true if a given day is a weekday', function () {
        assert.equal(true, isWeekday('Monday'))
    });

    it('Should return false if a given day is not a weekday', function () {
        assert.equal(false, isWeekday('Saturday'));

    });
});