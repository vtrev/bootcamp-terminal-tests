let allFromTown = require('../allFromTown');
let assert = require('assert');

//Creating variables regString and loc that will be used for testing
let reg = 'CL 124,CY 567,CL 345,CJ 456,CL 341';
let loc = 'CL';

describe('allFromTown', function () {

	it('Should return an array with all cars from a given town', function () {
		assert.deepEqual(["CL 124", "CL 345", "CL 341"], allFromTown(reg, loc))
	});

	it('Should return false if input argument is not a string', function () {
		assert.equal(false, allFromTown(56));
	});


});