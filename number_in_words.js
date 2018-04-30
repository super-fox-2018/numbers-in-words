function basicAngka(number) {
  if (number === 0) {return '';}
  let numString = number.toString();
  let firstDigit = Number(numString[0]);
  let numLength = numString.length;
  let string = '';
  let library = [
  {name: 'satu', num: 1},
  {name: 'dua', num: 2},
  {name: 'tiga', num: 3},
  {name: 'empat', num: 4},
  {name: 'lima', num: 5},
  {name: 'enam', num: 6},
  {name: 'tujuh', num: 7},
  {name: 'delapan', num: 8},
  {name: 'sembilan', num: 9},
  {name: 'sepuluh', num: 10},
  {name: 'sebelas', num: 11},
  {name: 'dua belas', num: 12},
  {name: 'tiga belas', num: 13},
  {name: 'empat belas', num: 14},
  {name: 'lima belas', num: 15},
  {name: 'enam belas', num: 16},
  {name: 'tujuh belas', num: 17},
  {name: 'delapan belas', num: 18},
  {name: 'sembilan belas', num: 19}
  ];
  let lengthLibrary = [
  {name: ' puluh', num: 2, kali: 10},
  {name: ' ratus', num: 3, kali: 100}
  ];
  if (number > 19) {
    if (firstDigit === 1 && numLength === 3) {
      string += 'seratus';
      number -= 100;
    } else {
      for (let j = 0; j < library.length; j++) {
        if (firstDigit === library[j].num) {
          string += library[j].name;
        }
      }
      for (let k = 0; k < lengthLibrary.length; k++) {
        if (numLength === lengthLibrary[k].num) {
          string += lengthLibrary[k].name;
          number -= firstDigit * lengthLibrary[k].kali;
        }
      }
    }
  } else {
    for (let i = 0; i < library.length; i++) {
      if (number === library[i].num) {
        string += library[i].name;
        number -= library[i].num;
      }
    }
  }
  return string + ' ' + basicAngka(number);
}

function numberToWords(number) {
  let numString = number.toString();
  let numLength = numString.length;
  let newNum = '';
  let string = '';
  let library1000 = [
  {name: 'ribu', jumlah: 6, kali: 1000},
  {name: 'juta', jumlah: 9, kali: 1000000},
  {name: 'miliyar', jumlah: 12, kali: 1000000000},
  {name: 'biliyar', jumlah: 15, kali: 1000000000000},
  {name: 'triliun', jumlah: 18, kali: 1000000000000000},
  ];
  if (numLength <= 3) {
    return basicAngka(number);
  }
  for (let i = 0; i < library1000.length; i++) {
    if (numLength <= library1000[i].jumlah) {
      newNum = Number(numString.slice(0, numLength - (library1000[i].jumlah - 3)));
      if (numLength === 4 && newNum === 1) {
        string += 'seribu';
        number -= 1000;
      } else {
        string += basicAngka(newNum) + library1000[i].name;
        number -= newNum * library1000[i].kali;
      }
      break;
    }
  }
  return string + ' ' + numberToWords(number);
}


// Driver code
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(725));
console.log(numberToWords(725725));
console.log(numberToWords(1003));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(999000000000000000));

