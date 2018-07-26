let assert = require('assert');
let mostProfitableDepartment = require('../mostProfitableDepartment');
let chai = require('chai');
let chaiAssert = chai.assert;

//salesData that will be used to test the function

var salesData = [{
        "department": "electronics",
        "sales": 4500,
        "day": "Monday"
    },
    {
        "department": "outdoor",
        "sales": 1500,
        "day": "Monday"
    },
    {
        "department": "carpentry",
        "sales": 5500,
        "day": "Monday"
    },
    {
        "department": "steelwork",
        "sales": 7500,
        "day": "Tuesday"
    },
    {
        "department": "outdoor",
        "sales": 2505,
        "day": "Tuesday"
    },
    {
        "department": "carpentry",
        "sales": 1540,
        "day": "Tuesday"
    },
    {
        "department": "hardware",
        "sales": 1500,
        "day": "Wednesday"
    },
    {
        "department": "outdoor",
        "sales": 8507,
        "day": "Wednesday"
    },
    {
        "department": "carpentry",
        "sales": 8009,
        "day": "Wednesday"
    },
    {
        "department": "hardware",
        "sales": 12000,
        "day": "Thursday"
    },
    {
        "department": "carpentry",
        "sales": 6109,
        "day": "Thursday"
    },
    {
        "department": "hardware",
        "sales": 7005,
        "day": "Friday"
    },
    {
        "department": "electronics",
        "sales": 12006,
        "day": "Friday"
    },
    {
        "department": "electronics",
        "sales": 16109,
        "day": "Saturday"
    },
    {
        "department": "steelwork",
        "sales": 7500,
        "day": "Tuesday"
    },
    {
        "department": "outdoor",
        "sales": 2505,
        "day": "Tuesday"
    },
    {
        "department": "carpentry",
        "sales": 1540,
        "day": "Tuesday"
    },
    {
        "department": "steelwork",
        "sales": 1500,
        "day": "Wednesday"
    },
    {
        "department": "carpentry",
        "sales": 8009,
        "day": "Wednesday"
    }
];






describe('mostProfitableDepartment', function () {

    it('Should return the  name ofthe most profitable department given a certain data set', function () {
        assert.equal("carpentry", mostProfitableDepartment(salesData));

    });

    it('Should ensure that the output is a string and nothing else', function () {
        chaiAssert.isString(mostProfitableDepartment(salesData), 'The output of the function(department) is the name as string');
    });


});