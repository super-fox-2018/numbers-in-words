function numberToWords(number) {

  const words = ['','satu','dua','tiga','empat','lima','enam','tuju','delapan','sembilan','sepuluh','sebelas' ];

  let output = '';

  if (number < 12) {
    output += words[number]
  }
  else if (number < 20) {
    output += (words[number - 10] + ' belas')
  }
  else if (number < 100) {
    output += words[Math.floor(number/10)] + ' puluh ' + words[number%10]
  }
  else if (number < 200) {
    output += 'seratus ' + numberToWords(number - 100)
  } else if (number < 1000) {
    output += words[Math.floor(number/100)] + ' ratus ' + numberToWords(number - 200);
  }   else if (number < 1000000) {
    output += numberToWords(Math.floor(number / 1000)) + "ribu " + numberToWords(number % 1000);

  } else if (number < 1000000000) {
    output += numberToWords(Math.floor(number / 1000000)) + "juta " + numberToWords(number % 1000000);

  } else if (number < 1000000000000) {
    output += numberToWords(Math.floor(number / 1000000000)) + "milyar " + numberToWords(number % 1000000000);
  }

  return output;
}



// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
