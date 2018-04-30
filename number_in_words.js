function numberToWords(number) {
// Your code here
  var satuan = ['satu', 'dua', 'tiga', 'empat', 'lima',
                'enam', 'tujuh', 'delapan', 'sembilan'];

  var unique = ['sepuluh', 'sebelas', 'seratus'];
  var verb = ['puluh', 'ratus', 'ribu', 'juta', 'milyar', 'triliun'];

}

// Driver code
console.log(numberToWords(4));
// console.log(numberToWords(27));
// console.log(numberToWords(102));
// console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
