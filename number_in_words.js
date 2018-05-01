function numberToWords(number) {
  var numberInwords = [{
      number: 1,
      words: 'satu'
    },
    {
      number: 2,
      words: 'dua'
    },
    {
      number: 3,
      words: 'tiga'
    },
    {
      number: 4,
      words: 'empat'
    },
    {
      number: 5,
      words: 'lima'
    },
    {
      number: 6,
      words: 'enam'
    },
    {
      number: 7,
      words: 'tujuh'
    },
    {
      number: 8,
      words: 'delapan'
    },
    {
      number: 9,
      words: 'sembilan'
    },
    {
      number: 10,
      words: 'sepuluh'
    },
    {
      number: 11,
      words: 'sebelas'
    },
    {
      number: 12,
      words: 'dua belas'
    },
    {
      number: 13,
      words: 'tiga belas'
    },
    {
      number: 14,
      words: 'empat belas'
    },
    {
      number: 15,
      words: 'lima belas'
    },
    {
      number: 16,
      words: 'enam belas'
    },
    {
      number: 17,
      words: 'tujuh belas'
    },
    {
      number: 18,
      words: 'delapan belas'
    },
    {
      number: 19,
      words: 'sembilan belas'
    }
  ]
  if (number <= 0) {
    return '';
  } else {
    for (var i = 0; i < numberInwords.length; i++) {
      if (number === numberInwords[i].number) {
        return numberInwords[i].words;
      } else if (number >= 20 && number <= 99) {
        var divide = Math.floor(number / 10)
        var restOfDivide = number % 10
        return numberToWords(divide) + ' puluh ' + numberToWords(restOfDivide);
      } else if (number >= 100 && number <= 999) {
        var divide = Math.floor(number / 100)
        var restOfDivide = number % 100
        return numberToWords(divide) + ' ratus ' + numberToWords(restOfDivide);
      } else if (number >= 1000 && number <= 9999) {
        var divide = Math.floor(number / 1000)
        var restOfDivide = number % 1000
        return numberToWords(divide) + ' ribu ' + numberToWords(restOfDivide);
      } else if (number >= 10000 && number <= 99999) {
        var divide = Math.floor(number / 10000)
        var restOfDivide = number % 10000
        return numberToWords(divide) + ' puluh ' + numberToWords(restOfDivide);
      } else if (number >= 100000 && number <= 999999) {
        var divide = Math.floor(number / 100000)
        var restOfDivide = number % 100000
        return numberToWords(divide) + ' ratus ' + numberToWords(restOfDivide);
      } else if (number >= 1000000 && number <= 9999999) {
        var divide = Math.floor(number / 1000000)
        var restOfDivide = number % 1000000
        return numberToWords(divide) + ' juta ' + numberToWords(restOfDivide);
      } else if (number >= 10000000 && number <= 99999999) {
        var divide = Math.floor(number / 10000000)
        var restOfDivide = number % 10000000
        return numberToWords(divide) + ' puluh ' + numberToWords(restOfDivide);
      } else if (number >= 100000000 && number <= 999999999) {
        var divide = Math.floor(number / 100000000)
        var restOfDivide = number % 100000000
        return numberToWords(divide) + ' ratus ' + numberToWords(restOfDivide);
      } else if (number >= 1000000000 && number <= 9999999999) {
        var divide = Math.floor(number / 1000000000)
        var restOfDivide = number % 1000000000
        return numberToWords(divide) + ' milyar ' + numberToWords(restOfDivide);
      } else if (number >= 10000000000 && number <= 99999999999) {
        var divide = Math.floor(number / 10000000000)
        var restOfDivide = number % 10000000000
        return numberToWords(divide) + ' puluh ' + numberToWords(restOfDivide);
      } else if (number >= 100000000000 && number <= 999999999999) {
        var divide = Math.floor(number / 100000000000)
        var restOfDivide = number % 100000000000
        return numberToWords(divide) + ' ratus ' + numberToWords(restOfDivide);
      } else if (number >= 1000000000000 && number <= 9999999999999) {
        var divide = Math.floor(number / 1000000000000)
        var restOfDivide = number % 1000000000000
        return numberToWords(divide) + ' triliun ' + numberToWords(restOfDivide);
      }
    }
  }
}

// // Driver code
console.log(numberToWords(705));
console.log(numberToWords(55353456));
console.log(numberToWords(1676868767));
console.log(numberToWords(4893735608356));
