module.exports = function isFromBellville(regNo) {
    var tmp_string = regNo.toUpperCase()
    return tmp_string.startsWith('CY');
}