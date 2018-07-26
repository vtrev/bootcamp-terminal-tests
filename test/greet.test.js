let assert = require('assert');
let greet = require('../greet')


describe('greetFunction', function () {

    it("Should return a string that greets the name in the input argument ", function () {
        assert.equal('Hello, Mpume', greet('Mpume'));
    });
    it('Should return false if the input argument is not of type string', function () {

        assert.equal(false, greet(55));

    });
});