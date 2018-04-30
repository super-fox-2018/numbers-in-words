function numberToWords(number) {
  
  var str=number.toString()
  var splitNum=number.split("")
  var bl = 'belas'
  var ph = 'puluh'
  var rs = 'ratus'
  var rb = 'ribu'
  var jt = 'juta'
  var pr = 'puluh ribu'

  if(number===0 && str.length===0) {
    return 'Nol'
  } else if(number===0) {
    return ''+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===10) {
    return 'sepuluh'+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===11) {
    return 'sebelas'+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===100) {
    return 'seratus'+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===1000) {
    return 'seribu'+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===1000) {
    return 'seribu'+(numberToWords(Number(str.substring(1, str.length))))
  } 
  
  if(str.length===3) {
    if(number===2) {
    return 'dua'+rs+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===3) {
    return 'tiga'+rs+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===4) {
    return 'empat'+rs+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===5) {
    return 'lima'+rs+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===6) {
    return 'enam'+rs+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===7) {
    return 'tujuh'+rs+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===8) {
    return 'delapan'+rs+(numberToWords(Number(str.substring(1, str.length))))
  } else if(number===9) {
    return 'sembilan'+rs+(numberToWords(Number(str.substring(1, str.length))))
  } 
}
  
if(str.length===4) {
  if(number===2) {
  return 'dua'+rb+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===3) {
  return 'tiga'+rb+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===4) {
  return 'empat'+rb+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===5) {
  return 'lima'+rb+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===6) {
  return 'enam'+rb+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===7) {
  return 'tujuh'+rb+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===8) {
  return 'delapan'+rb+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===9) {
  return 'sembilan'+rb+(numberToWords(Number(str.substring(1, str.length))))
} 

if(str.length===5) {
  if(number===2) {
  return 'dua'+pr+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===3) {
  return 'tiga'+pr+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===4) {
  return 'empat'+pr+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===5) {
  return 'lima'+pr+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===6) {
  return 'enam'+pr+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===7) {
  return 'tujuh'+pr+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===8) {
  return 'delapan'+pr+(numberToWords(Number(str.substring(1, str.length))))
} else if(number===9) {
  return 'sembilan'+pr+(numberToWords(Number(str.substring(1, str.length))))
} 
}
}
  
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));


var angka = ['nol', 'satu', 'dua,', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh']
    var belas = ['belas', 'sebelas']
    var puluh = ['puluh', 'sepuluh']
    var ratus = ['ratus', 'seratus']
    var ribu = ['ribu', 'seribu']
    var juta = ['juta']

    var result=''