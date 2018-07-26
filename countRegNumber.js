module.exports = function countRegNumber(regString) {

	if (typeof (regString) == 'string') {


		var arr = regString.split(",");

		return arr.length;
	} else {
		return false;
	};
};