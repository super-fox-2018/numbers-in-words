function numberToWords(number) {
  // Your code here
  var output = ""
  var satuan = ["",["se","satu"],"dua","tiga","empat","lima","enam","tujuh","delapan","sembilan"]
  var deskripsi = [["","puluh", "ratus"], "ribu", "juta", "milyar", "trilliun"]
  number = number.toString().split("").reverse().join("")
  numberArray = [[]]
  insertingtoArray = 0
  for(i=0;i<number.length;i++){
    if(i%3==0&&i!==0){
      insertingtoArray++
      numberArray[insertingtoArray]=[]
    }
    numberArray[insertingtoArray].push(number.charAt(i))
  }
  var penghitungAdvanced = numberArray.length-1
  for(i=numberArray.length-1;i>=0;i--){
    for(j=numberArray[i].length-1;j>=0;j--){
      if(numberArray[i][j]==1&&j!==1){
        output+=i%3==0?satuan[1][0]:satuan[1][1]+" "
      }else if(numberArray[i][j]==1&&j==1){
        if(numberArray[i][j-1]>0){
          output+= numberArray[i][j-1]==1?"se":satuan[numberArray[i][j-1]]
          output+=numberArray[i][j-1]==1?"belas ": " belas "
          j--
          break;
        }else{
          output+= " sepuluh "
          j--
          break;
        }
      }else{
        output+=satuan[numberArray[i][j]]+" "
      }
      output+= numberArray[i][j]==0?"":deskripsi[0][3-(3-j)]+" "
    }
    output+=i>=1&&parseInt(numberArray[i][0])+parseInt(numberArray[i][1])+parseInt(numberArray[i][2])!==0?deskripsi[i]+ " ":""
  }
  return output
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(9461684464654))
console.log(numberToWords(11000))
console.log(numberToWords(12))
console.log(numberToWords(10))
console.log(numberToWords(110))
console.log(numberToWords(999000000000000))
