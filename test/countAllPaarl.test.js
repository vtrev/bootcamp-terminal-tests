let assert = require('assert');
let chai = require('chai');
let chaiAssert = chai.assert;
let countAllPaarl = require('../countAllPaarl');

var out = ['CJ 678 543', 'CJ 67890'];
var registration = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

describe('countAllPaarl', function () {

	it('Should return an array with all registration numbers from Paarl given a string input', function () {
		assert.deepEqual(countAllPaarl(registration), out);
	});
	it('Should return false if a given input is not a string', function () {
		assert.equal(false, countAllPaarl(['this is not a string']));
	});

	it('The array must not be null, it may return an empty list if there are no cars from Paarl ', function () {
		chaiAssert.isNotNull(countAllPaarl('test string with no cars from Paarl'));
	});

});