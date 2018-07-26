let assert = require('assert');
let fromWhere = require('../fromWhere');
let chai = require('chai');
let chaiAssert = chai.assert;


describe('fromWhere', function () {
    it('should return where a car is from given a registration number', function () {

        assert.equal('Bellville', fromWhere('CY 224 698'));
    });
    it('Should make sure the output of the function is a string', function () {
        chaiAssert.typeOf(fromWhere('CY 224 689'), 'string');
    });



});