function numberToWords(number) {
  // Your code here
  var str=String(number)
  var angka={
    'sebelas' : 11,
    'sepuluh' : 10,
    'sembilan' : 9,
    'delapan' : 8,
    'tujuh' : 7,
    'lima'  : 5,
    'empat' : 4,
    'tiga'  : 3,
    'dua'   : 2,
    'satu'  : 1
  }
  var tampung=''
  // if(number === 0){
  //   return ''
  // }
for(var i in angka){
  var length6 = Math.floor(number/1000000)
  var length5 = Math.floor(number/10000)
  var length4 = Math.floor(number/1000)
  var length2 = Math.floor(number/10)
  var length3 = Math.floor(number/100)
  if(length6 === angka[i]){
    if(number >= 1000000){
      return i + ' juta ' + numberToWords(number -(length6 * 1000000))
    }
  }
  if(length5 === angka[i]){
    if(number > 10000){
      return i + ' puluh ribu ' + numberToWords(number -(length5 * 10000))
    }
  }
  if(length4 === angka[i]){
    if(number > 1000){
      return i + ' ribu ' + numberToWords(number - (length4 * 1000))
    }
  }
  if(length3 === angka[i]){
    if(number > 100){
      return i +  ' ratus ' +numberToWords(number - (length3 * 100))
    }
  }
  if(length2 === angka[i]){
    if(number > 10){
      return i + ' puluh ' + numberToWords(number -(length2 * 10))
    }
  }
  if(number === angka[i]){
    return i
  }

}
  }
// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
