var dpdata = {};

module.exports = function mostProfitableDepartment(salesData) {
    for (let i = 0; i < salesData.length; i++) {
        var test = salesData[i];
        if (dpdata[test.department] == undefined) {
            dpdata[test.department] = 0;
        }
        dpdata[test.department] += test.sales;
    }
    var arrayOfKeys = Object.keys(dpdata);
    var arrayOfValues = [];
    //pushing values from the object into an array in order to sort them
    for (var i in dpdata) {
        arrayOfValues.push(dpdata[i]);
    }

    //sorting the values and assigning the maximum to a variable

    for (let i = 0; i < arrayOfValues.length; i++) {
        if (arrayOfValues[i] > arrayOfValues[i + 1]) {
            arrayOfValues[0] = arrayOfValues[i];
            var maxDP = arrayOfValues[0];
        }

    }

    //looping through the  dpdata object to match if 
    for (let i = 0; i < Object.keys(dpdata).length; i++) {
        var val = (dpdata[Object.keys(dpdata)[i]]);
        //console.log(val);
        if (maxDP == val) {
            return (Object.keys(dpdata)[i]);
        }
    }

}