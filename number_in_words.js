function numberToWords(number) {
  const bilangan1 = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  var tempNum = '';

  if (number < 12) {
    tempNum += bilangan1[number] + " ";
  } else if (number < 20) {
    tempNum += numberToWords(number - 10) + "belas ";
  } else if (number < 100) {
    tempNum += numberToWords(Math.floor(number / 10)) + "puluh " + numberToWords(number % 10);
  } else if (number < 200) {
    tempNum += "seratus " + numberToWords(number - 100);
  } else if (number < 1000) {
    tempNum += numberToWords(Math.floor(number / 100)) + "ratus " + numberToWords(number % 100);
  } else if (number < 2000) {
    tempNum += "seribu " + numberToWords(number - 1000);
  } else if (number < 1000000) {
    tempNum += numberToWords(Math.floor(number / 1000)) + "ribu " + numberToWords(number % 1000);
  } else if (number < 1000000000) {
    tempNum += numberToWords(Math.floor(number / 1000000)) + "juta " + numberToWords(number % 1000000);
  } else if (number < 1000000000000) {
    tempNum += numberToWords(Math.floor(number / 1000000000)) + "milyar " + numberToWords(number % 1000000000);
  }
  return tempNum;
}

// Driver code
console.log(numberToWords(2200100001));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
