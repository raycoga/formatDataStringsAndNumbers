export const parseStringToNumber = string => {
  /* Asi funciona esta funcion:
    Se le pasa un numero que posea este formato ###.###.###,####
    y la funcion se encargara de eliminar los puntos, cambiar la coma por un punto y luego
    convertir el string en un numero decimal 
  */
  let number;
  number = string.replace(/\./g, "");
  number = number.replace(",", ".");
  return parseFloat(number);
};
/*   eslint-disable-next-line no-extend-native  */
Number.prototype.parseNumberToString = function() {
  /* Asi es como funciona esto
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

    NOTA: si lo vas a utilizar en un codigo de React con crear esta funcion dentro del proyecto y luego llamarla de la siguiente forma =>

    let string = number.parseNumberToString()
      donde number= a un numero cualquiera

    es mas que suficiente
  */
  var re = '\\d(?=(\\d{' + (3 || 3) + '})+' + (2 > 0 ? '\\D' : '$') + ')',
      num = this.toFixed(Math.max(0, ~~2));

  return (',' ? num.replace('.', ',') : num).replace(new RegExp(re, 'g'), '$&' + ('.' || ','));
};



