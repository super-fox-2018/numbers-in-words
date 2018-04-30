function numberToWords(number) {
  // Your code here
  var satuan = {
    1: 'satu',
    2: 'dua',
    3: 'tiga',
    4: 'empat',
    5: 'lima',
    6: 'enam',
    7: 'tujuh',
    8: 'delapan',
    9: 'sembilan'
  }
  var unique = {
    10: 'sepuluh',
    11: 'sebelas',
    100: 'seratus',
    1000: 'seribu'
  }

  for (var key in satuan) {
    if (number === key) {
      return satuan[key];
    }
  }
}

// Driver code
console.log(numberToWords(4));
// console.log(numberToWords(27));
// console.log(numberToWords(102));
// console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
