const toBase62 = n => {
  var digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';
  while (n > 0) {
    result = digits[n%62] + result;
    n = parseInt(n/62);
  }
  return result;
}

module.exports = {
  toBase62
}