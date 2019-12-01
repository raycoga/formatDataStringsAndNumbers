export const parseStringToNumber = string => {
  let number;
  number = string.replace(/\./g, "");
  number = number.replace(",", ".");
  return parseFloat(number);
};
Number.prototype.parseNumberToString = function() {
  /* This is an example of how it works this function 
  * Number.prototype.format(n, x, s, c)
 * 
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 * 
 * 
 * Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

    12345678.9.format(2, 3, '.', ',');  // "12.345.678,90"

  */
  var re = '\\d(?=(\\d{' + (3 || 3) + '})+' + (2 > 0 ? '\\D' : '$') + ')',
      num = this.toFixed(Math.max(0, ~~2));

  return (',' ? num.replace('.', ',') : num).replace(new RegExp(re, 'g'), '$&' + ('.' || ','));
};



