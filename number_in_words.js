function numberToWords(number) {
  // Your code here
  let word = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']

  if (number<10) {
    return word[number]
  }
  if (number>=10 && number<100) {
    if (number>=11 && number<20) {
      let digitBelakang = number%10
      if (number===11) {
      return 'sebelas'
    }
      return numberToWords(digitBelakang)+' belas'
    }
    let digitBelakang = number%10
    let digitDepan = Math.floor(number/10)
    if (number===10) {
      return 'sepuluh'
    }
    return numberToWords(digitDepan) + ' puluh ' + numberToWords(digitBelakang)
  }
  else if (number>=100 && number<1000) {
    let digitDepan = Math.floor(number/100)
    let digitBelakang = number%100
    //console.log(digitBelakang);
    if (number===100) {
      return 'seratus'
    }
    else{
      if (digitDepan===1) {
        return 'seratus' +' '+ numberToWords(digitBelakang)
      }
      return numberToWords(digitDepan) + ' ratus ' + numberToWords(digitBelakang)
    }
  }
  else if (number>=1000 && number<100000) {
    let digitDepan = Math.floor(number/1000)  
    let digitBelakang = number%1000
    // console.log(digitDepan);
    // console.log(digitBelakang);
    if (digitDepan===1) {
      return 'seribu ' + numberToWords(digitBelakang)
    }
    return numberToWords(digitDepan) +' ribu ' + numberToWords(digitBelakang)
  }
  else if (number>=100000 && number<1000000) {
    let digitDepan = Math.floor(number/100000)
    let digitBelakang = number%100000
     console.log('digit depan ratusan ribu',digitDepan);
     console.log('digit belakang ratusan ribu',digitBelakang);
    if (digitDepan===1) {
      return 'seratus' + numberToWords(digitBelakang)
    }
    return numberToWords(digitDepan) + ' ratus '+ numberToWords(digitBelakang)
  }
  else if (number>=1000000 && number<1000000000) {
    let digitDepan = Math.floor(number/1000000)
    let digitBelakang = number%1000000
    console.log('digit ke digitDepan juta',digitDepan);
    console.log('digit ke digitBelakang juta',digitBelakang);
    if (digitDepan===1) {
      return 'sejuta' + numberToWords(digitBelakang)
    }
    return numberToWords(digitDepan) + ' juta ' + numberToWords(digitBelakang)
  }
  // else if (number>=1000000000 && number<1000000000000) {
  //   let digitDepan = Math.floor(number/1000000000)
  //   let digitBelakang = number%1000000000
  //   return numberToWords(digitDepan) + ' milyar ' + numberToWords(digitBelakang)
  // }
  // else if (number>=1000000000000 && number<1000000000000000) {
  //   let digitDepan = Math.floor(number/1000000000000)
  //   let digitBelakang = number%1000000000000
  //   return numberToWords(digitDepan)+ ' trilyun '+ numberToWords(digitBelakang)
  // }

}

// Driver code
// console.log(numberToWords(10));
// console.log(numberToWords(12));
// console.log(numberToWords(27));
// console.log(numberToWords(84));
// console.log(numberToWords(100));
// console.log(numberToWords(110));
//console.log(numberToWords(112));
// console.log(numberToWords(705));
// console.log(numberToWords(852));
// console.log(numberToWords(1000));
// console.log(numberToWords(1001));
// console.log(numberToWords(1012));
// console.log(numberToWords(67123));
// console.log(numberToWords(124124));
// console.log(numberToWords(112312));
// console.log(numberToWords(234524));
// console.log(numberToWords(1000000));
// console.log(numberToWords(10020122));
// console.log(numberToWords(1000000));
// console.log(numberToWords(300123122));
// console.log(numberToWords(999999999999999));