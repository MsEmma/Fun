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

  var string = message2.replace(/[^\w\d\s]/g, "");
  var list = string.match(/(\w+)(\s)+(\d+)/g);
  var costMap = {};

  list.forEach(function(str) {
    var food = str.match(/\w+/);
    var cost = str.match(/\d+/);
    costMap[food] = Number(cost);
  });

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
