function numberToWords(number) {
  // Your code here
  
  
  
  if(number===0){
    return '';
  }
 var realBilangan = number;
 var bilangan = number.toString();
 var angka = [19,18,17,16,15,14,13,12,11,10, 9,8,7,6,5,4,3,2,1]
 var words = ['sembilan belas','delapan belas','tujuh belas','enam belas','lima belas','empat belas','tiga belas','dua belas','sebelas','sepuluh','sembilan','delapan','tujuh','enam', 'lima','empat','tiga', 'dua', 'satu' ];
 var digit = [2,3,4,5];
 var digitWrds = ['ribu','juta','milyar','triliun'] 
 var digitDepan = [2,3,4]
 var digitDepanWord = ['puluh', 'ratus', 'ribu']

var splitNumber = [];
var temp = [];
for(let a=bilangan.length-1;a>=0;a--){
  temp.unshift(bilangan[a])
  if(temp.length === 3 ){
    splitNumber.unshift(temp)
    temp = [];
  }else if(a===0 && temp.length < 3){
    splitNumber.unshift(temp)
  }

}
console.log(splitNumber)
console.log(splitNumber[splitNumber.length-1].length)
var terbilang = []

console.log(splitNumber[0][0])
console.log(splitNumber[0].length)


for(let a=0; a<=angka.length-1; a++){
  console.log(angka[a])  
  if(Number(splitNumber[0].join(''))<20 && Number(splitNumber[0].join(''))===angka[a] ){
      terbilang.push(words[a])
    break;
  }else if(Number(splitNumber[0][0]) === angka[a]){
      terbilang.push(words[a])
    break;
  }
}



for(let a=0; a<=digitDepan.length-1; a++){
  if(Number(splitNumber[0])===1 && splitNumber.length ===2 ){
    terbilang = ['seribu']
  }else if(digitDepan[a]===splitNumber[0].length){

    if(Number(splitNumber[0].join(''))<200 && Number(splitNumber[0].join(''))>99){
      terbilang = ['seratus']
    }else if(Number(splitNumber[0].join(''))<20 && Number(splitNumber[0].join(''))>=10){
      terbilang.push(null)
    }else{
      terbilang.push(digitDepanWord[a])
    }
  }
}

console.log(splitNumber)
console.log(terbilang)
var satuan = '';
for(let a=0; a<=digit.length-1; a++){
  if(splitNumber.length === digit[a]){
    if(terbilang[0]==='seribu'){
      continue;
    }else{
      satuan = digitWrds[a];
    }
  }
}


var hasil  = terbilang.join(' ') + ' ' +satuan;
console.log(hasil)
console.log(splitNumber)

var newNumber = [];


console.log(splitNumber.length)

for(let a=1; a<=splitNumber.length-1; a++){
  for(let b=0; b<=splitNumber[a].length-1; b++){
    newNumber.push(splitNumber[a][b])
  }
}
var theNew = Number(newNumber.join(''))
console.log(newNumber);
console.log(theNew)

if(splitNumber.length===1){
  console.log(splitNumber[0].slice(1))
  theNew = Number(splitNumber[0].slice(1).join(''));
}
console.log(theNew)
  return hasil +' ' +numberToWords(theNew)
}

// Driver code
console.log(numberToWords(1909));
//  console.log(numberToWords(1000000));
//  console.log(numberToWords(2011845));
