let assert = require('assert');
let findItemsOver20 = require('../findItemsOver20');
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


var results = [{
        name: 'pears',
        qty: 37
    },
    {
        name: 'bananas',
        qty: 27
    },
];

describe('findItemsOver20', function () {
    it('Should return items with quantity over 20 given a list of objects', function () {
        assert.deepEqual(results, findItemsOver20(list));

    });
    it('Ensure item quantity is at least 20 ', function () {
        chaiAssert.isAtLeast(findItemsOver20(list)[0].qty, 20, 'The quantity should be 20 and above')
    });

});