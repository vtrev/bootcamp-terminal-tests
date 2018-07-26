var stell = [];

module.exports = function allFromTown(regString, loc) {
    if (typeof (regString) == 'string') {

        var arr = regString.split(",");

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].startsWith(loc)) {
                stell.push(arr[i]);

            }

        }
        //console.log(stell);
        return stell;
    } else {
        return false
    }
}