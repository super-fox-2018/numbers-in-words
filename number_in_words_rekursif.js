function numberToWords(number) {
	let string = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']


	if(number<10) {
		return string[number]
	}else {
		if(number >=10 && number<=99) {
			let div = Math.floor(number/10)
 			let mods= number%10

			if(number>=10 && number <=19) {
 				if(number == 11) {
 					return(`sebelas`)
 				}else if(number==10) {
 					return('sepuluh')
 				}else{
 					return `${numberToWords(mods)} belas`	
 				}
 			}else if(number >=20 && number <=99) {
 				return `${numberToWords(div)} puluh ${numberToWords(mods)}`
 			}	
		}else if(number >=100 && number <=999) {
			let div=Math.floor(number/100)
			let mods=number%100

			if(number >= 100 && number <= 199) {
				return `seratus ${numberToWords(mods)}` 
			}else {
				return `${numberToWords(div)} ratus ${numberToWords(mods)}`
			}
		}else if(number >=1000 && number<=99999) {
			let div=Math.floor(number/1000)
			let mods=number%1000

			if(number >= 1000 && number <= 1999) {
				return `seribu ${numberToWords(mods)}` 
			}else {
				return `${numberToWords(div)} ribu ${numberToWords(mods)}`
			}
		}else if(number >=100000 && number<=999999) {
			let div=Math.floor(number/100000)
			let mods=number%100000

			if(number >= 100000 && number <= 199999) {
				if(number >= 100000 && number <= 199999) {
					if(number >=100000 && number <= 100999) {
						return `seratus ribu ${numberToWords(mods)}`
					}else {
						return `seratus ${numberToWords(mods)}`	
					}
				}
				 
			}else {
				return `${numberToWords(div)} ratus ${numberToWords(mods)}`
			}
		}else if(number >=1000000 && number<1000000000) {
			let div=Math.floor(number/1000000)
			let mods=number%1000000
			return `${numberToWords(div)} juta ${numberToWords(mods)}`
		
		}else if(number >=1000000000 && number<1000000000000) {
			let div=Math.floor(number/1000000000)
			let mods=number%1000000000
			return `${numberToWords(div)} milyard ${numberToWords(mods)}`
		
		}else if(number >=1000000000000 && number<=999000000000000) {
			let div=Math.floor(number/1000000000000)
			let mods=number%1000000000000
			return `${numberToWords(div)} triliun ${numberToWords(mods)}`
		}
			
 			  
 		 
	}

}
console.log(numberToWords(999000000000000))
console.log(numberToWords(998925000000000))