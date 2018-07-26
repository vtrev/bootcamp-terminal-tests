var over20 = [];

module.exports = function findItemsOver20(list) {

    for (let i = 0; i < list.length; i++) {
        var itm = list[i];
        var qty = list[i].qty;
        if (qty > 20) {
            over20.push(itm)
        }
    }

    return over20;
}