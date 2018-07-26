  var paarl = [];

  module.exports = function countAllPaarl(reg) {

  	if (typeof (reg) == 'string') {
  		var new_reg = reg.split(", ");
  		for (var i = 0; i < new_reg.length; i++) {
  			var lst = new_reg[i]
  			if (new_reg[i].startsWith("CJ")) {
  				paarl.push(new_reg[i]);
  			}

  		}
  		return paarl;
  	} else {
  		console.log('input not string');
  		return false
  	}
  }