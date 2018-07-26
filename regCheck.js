module.exports = function regCheck(reg, loc) {
  var regNo = reg.endsWith(loc);
  return regNo;
}