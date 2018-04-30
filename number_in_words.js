function numberToWords(number) {
  var array=["","satu","dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilang"]
  if (number<10){
    return array[number]
  }
  if (number>=1000000){
    var jutaan= array[Math.floor(number/1000000)]
    // console.log(jutaan)
    if(jutaan==="satu"){
      return "sejuta "+ numberToWords(number%1000000)
    }
    else {
      return jutaan + " juta "+ numberToWords(number%1000000)
    } 
    
  }
  else if (number>=100000){
    var ratusanRibu= array[Math.floor(number/100000)]
    if(ratusanRibu==="satu"){
      return "seratus ribu "+ numberToWords(number%10000)
    }
    else {
      return ratusanRibu + " ratus ribu "+ numberToWords(number%10000)
    } 
  }
  else if (number>=10000){
    var puluhanRibu= array[Math.floor(number/10000)] 
    var modulus=number%10000
    if(puluhanRibu==="satu"){
      return "sepuluh "+ numberToWords(number%10000)
    }
    else if(modulus >= 1000 && modulus < 2000){
      return "sebelas ribu "+ numberToWords(number%10000)
    }
    else {
     return puluhanRibu+ " puluh ribu "+ numberToWords(number%10000)
    }
  }
  if (number>=1000){
    var ribuan= array[Math.floor(number/1000)]
    if(ribuan==="satu"){
      return "seribu "+ numberToWords(number%1000)
    }
    else {
      return ribuan + " ribu "+ numberToWords(number%1000)
    }
  }
  else if (number>=100){
    var ratusan= array[Math.floor(number/100)]
    if(ratusan==="satu"){
      return "seratus "+ numberToWords(number%100)
    }
    else {
      return ratusan + " ratus "+ numberToWords(number%100)
    }
  }
  else if (number>=20){
    var puluhan= array[Math.floor(number/10)] + " puluh " + numberToWords(number%10)
    return puluhan
  }
  else if (number<20){
    var belasan= array[Math.floor(number/10)]
    if(belasan==="satu"){
      return "sepuluh "+ numberToWords(number%10)
    }
    else if(number%10 === 1){
      return "sebelas "+ numberToWords(number%10)
    }
    else {
      return belasan + " belas "+ numberToWords(number%10)
    }
  }  
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
