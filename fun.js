exports.quantity = function(message1) {

  var words = message1.split(' ')

  quantityMap = {};

  for (i = 0; i < words.length; i++) {
    if (!isNaN(words[i])) {
      quantityMap[words[i + 1]] = Number(words[i]);
    }
  }

  return quantityMap;
}

exports.cost = function(message2) {

  var words = message2.split(' ');

  for (i = 0; i < words.length; i++) {
    if (words[i] === "-") {
      words.splice(i, 1);
      i--
    }
  }

  costMap = {};

  for (i = 0; i < words.length; i++) {

    if (!isNaN(words[i])) {
      costMap[words[i - 1]] = Number(words[i]);
    }
  }

  return costMap;

}

exports.totalBill = function(quantityMap, costMap) {

  var total = 0;

  for (var quantity in quantityMap) {
    for (var cost in costMap) {
      if (quantity === cost) {
        total += (quantityMap[quantity] * costMap[cost]);
      }
    }
  }

  return total;

}
