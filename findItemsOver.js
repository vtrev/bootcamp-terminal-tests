module.exports = function findItemsOver(list, threshold) {
    var over = [];
    for (let i = 0; i < list.length; i++) {
        var itm = list[i];
        var qty = list[i].qty;
        if (qty > threshold) {
            over.push(itm)
        }
    }
    return over;

}