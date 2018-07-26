let assert = require('assert');
let findItemsOver = require('../findItemsOver');
let chai = require('chai');
let chaiAssert = chai.assert;
var list = [{
        name: 'apples',
        qty: 10
    },
    {
        name: 'pears',
        qty: 37
    },
    {
        name: 'bananas',
        qty: 27
    },
    {
        name: 'apples',
        qty: 3
    },
];

var threshold = 20;


describe('findItemsOver', function () {
    it('should return items that have a higher quantity than threshold', function () {
        assert(list, findItemsOver(threshold));

    });
    it('Should ensure the threshold is a valid number', function () {
        chaiAssert.typeOf(threshold, 'number', 'The threshold must be a valid number');
    });


});