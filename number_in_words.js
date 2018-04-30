function numberToWords(number) {
  var arrSingle = ["satu","dua","tiga","empat","lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];

  if( number === 0 ){
    return "";
  }
  else{
    switch (true){
      case number < 12:{
        return (arrSingle[number - 1]+ " ");
      }
      case number < 20: {
        return (numberToWords(number - 10) + "belas ");
      }
      case number < 100: {
        return (numberToWords(Math.floor(number / 10)) + "puluh " + numberToWords(Math.floor(number % 10)));
      }
      case number === 100: {
        return ("seratus ");
      }
      case number < 200:{
       return ("seratus " + numberToWords(number - 100) + " ");
      }
      case number < 1000:{
        return(numberToWords(Math.floor(number / 100)) + "ratus " + numberToWords(Math.floor(number % 100)));
      }
      case number === 1000:{
        return ("seribu ");
      }
      case number < 2000:{
        return("seribu " + numberToWords(number - 1000) + " ");
      }
      case number < 1000000:{
        return (numberToWords(Math.floor(number / 1000)) + "ribu " + numberToWords(Math.floor(number % 1000)));
      }
      case number < 1000000000: {
        return (numberToWords(Math.floor(number / 1000000)) + "juta " +
        numberToWords(Math.floor(number % 1000000)));
      }
      case number < 100000000000: {
        return (numberToWords(Math.floor(number / 100000000)) + "milyar " +
        numberToWords(Math.floor(number % 100000000)));
      }
      case number < 1000000000000000: {
        return (numberToWords(Math.floor(number / 1000000000000)) + "triliun " +
        numberToWords(Math.floor(number % 1000000000000)));
      }
    }
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(1000000000000));
