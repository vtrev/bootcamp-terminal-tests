let assert = require('assert');
let countRegNumber = require('../countRegNumber');
let chai = require('chai');
let chaiAssert = chai.assert;
describe('countRegNumber', function () {
	it('Should return the number of registrations in a given string', function () {
		assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));

	});
	it('Should return false should the input argument is not a string', function () {
		assert.equal(false, countRegNumber(56));
	});
	it('Should return atleast 1 plate if a string of plate(s) was given as an argument', function () {
		chaiAssert.isAbove(countRegNumber('CA 182736,CY 523519,CJ 812328'), 0, 'Number of plates must be atleast 1')
	});

});