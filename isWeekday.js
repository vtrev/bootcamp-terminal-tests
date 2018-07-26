module.exports = function isWeekday(day_x) {
    return !day_x.startsWith('S')
}