const ftoc = function(temp1) {
  let f = parseFloat(temp1); 
  var x = (f - 32) * (5 / 9);
  return parseFloat(x.toFixed(1));
}

const ctof = function(temp2) {
  let c = parseFloat(temp2);
  var y = (c * (9 / 5)) + 32;
  return parseFloat(y.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
