function numberToWords(number) {
  var wordsLeft = number.toString();
  var angka = {
      sembilan: 9,
      delapan: 8,
      tujuh: 7,
      enam: 6,
      lima: 5,
      empat: 4,
      tiga: 3,
      dua: 2,
      satu: 1,
  };

  var satuan = {
      triliun: 1000000000000,
      milyar: 1000000000,
      'ratus juta': 100000000,
      'puluh juta': 10000000,
      juta: 1000000,
      'ratus ribu': 100000,
      'belas ribu': 11000,
      'puluh ribu': 10000,
      ribu: 1000,
      ratus: 100,
      puluh: 20,
      belas: 10,
  };
  
  var output = [];
  
  while(wordsLeft.length == 7) {
    for(let key in angka) {
      for(let i in satuan) {
        if(wordsLeft[0] == angka[key] && number >= satuan[i]) {
          output.push(key);
          output.push(i);
          number -= (angka[key] * satuan[i]);
          wordsLeft = number.toString();
        }
      }
    }
  }
  
  while(wordsLeft.length == 6) {
    for(let key in angka) {
      for(let i in satuan) {
        if(wordsLeft[0] == 1 && number >= satuan[i]) {
          output.push('se'+ i);
          number -= (angka[key] * satuan[i]);
          wordsLeft = number.toString();
        } else if(wordsLeft[0] == angka[key] && number >= satuan[i]) {
          output.push(key);
          output.push(i);
          number -= (angka[key] * satuan[i]);
          wordsLeft = number.toString();
        }
      }
    }
  }
  
  while(wordsLeft.length == 5) {
    for(let key in angka) {
      for(let i in satuan) {
        if(parseInt(wordsLeft[0] + wordsLeft[1]) < 20 && parseInt(wordsLeft[0] + wordsLeft[1]) >= satuan[i]) {
          if(wordsLeft[1] > 1 && wordsLeft[1] == angka[key]) {
            output.push(key + ' ' + i);
            number -= (10000 + (angka[key] * 1000));
            wordsLeft = number.toString();
          } else if(wordsLeft[1] == angka[key]){
            output.push('se' + i + ' ribu');
            number -= (10000 + (angka[key] * 1000));
            wordsLeft = number.toString();
          }
        }
      }
    }
  }
  
  while(wordsLeft.length == 4) {
    for(let key in angka) {
      for(let i in satuan) {
        if(wordsLeft[0] == 1 && number >= satuan[i]) {
          output.push('se'+ i);
          number -= (angka[key] * satuan[i]);
          wordsLeft = number.toString();
        } else if(wordsLeft[0] == angka[key] && number >= satuan[i]) {
          output.push(key);
          output.push(i);
          number -= (angka[key] * satuan[i]);
          wordsLeft = number.toString();
        }
      }
    }
  }
  
  while(wordsLeft.length == 3) {
    for(let key in angka) {
      for(let i in satuan) {
        if(wordsLeft[0] == 1 && number >= satuan[i]) {
          output.push('se' + satuan);
          number -= (angka[key] * satuan[i]);
          wordsLeft = number.toString();
        } else if(wordsLeft[0] == angka[key] && number >= satuan[i]) {
          output.push(key);
          output.push(i);
          number -= (angka[key] * satuan[i]);
          wordsLeft = number.toString();
        }
      }
    }
  }
  
  while(wordsLeft.length == 2) {
    for(let key in angka) {
      for(let i in satuan) {
        if(number == 11 && number >= satuan[i]) {
          output.push('se' + i);
          number -= (1 + satuan[i]);
          wordsLeft = number.toString();
        } else if(number < 20 && wordsLeft[1] == angka[key] && number < satuan[i]) {
          output.push(key);
          output.push(i);
          number -= (angka[key] + satuan[i]);
          wordsLeft = number.toString();
        } 
      }
    }
  }
  
  return output.join(' ');
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
