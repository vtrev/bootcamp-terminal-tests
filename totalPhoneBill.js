module.exports = function totalPhoneBill(data) {
    var arr = data.split(",");
    var sms_count = 0;
    var call_count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'sms' || arr[i] == ' sms') {
            sms_count++;
        } else {
            call_count++;
        }
        var total = ((sms_count * 0.65) + (call_count * 2.75));
        var total = parseFloat(total.toFixed(2));
    }
    return [total, 'R' + total]
}