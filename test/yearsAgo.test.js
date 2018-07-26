let assert = require('assert');
let yearsAgo = require('../yearsAgo');
let chai = require('chai');
let chaiAssert = chai.assert;

describe('yearsAgo', function () {
    it('Should return how many years ago from now a certain year was', function () {
        assert.equal(23, yearsAgo(1995))

    });
    it('Should make sure the output is a number', function () {
        chaiAssert.typeOf(yearsAgo(2002), 'number');
    });

    it('Should return false if a given input argument is not a number ', function () {
        assert.equal(false, yearsAgo('2014'))

    });


});