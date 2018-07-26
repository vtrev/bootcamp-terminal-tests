module.exports = function yearsAgo(year) {

	if (typeof (year) == 'number') {

		return (2018 - year)
	} else {
		return false;
	}
}