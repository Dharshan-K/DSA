function printStar(){	
	for(let i=0;i<4;i++){
		let pattern = ""
		for(let j=0; j<4;j++){
			pattern += "* "
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// * * * * 

// * * * * 

// * * * * 

// * * * * 


// printStar()

function printStar2(){
	for(let i=0;i<4;i++){
		pattern = ""
		for(let j=0;j<=i;j++){
			pattern += "* "
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// * 

// * * 

// * * * 

// * * * * 


// printStar2()

function printNumber(){
	for(let i=1;i<=5;i++){
		pattern = ""
		for(let j=1;j<=i;j++){
			pattern += j.toString() + " "
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// 1 

// 1 2 

// 1 2 3 

// 1 2 3 4 

// 1 2 3 4 5 


// printNumber()

function printRowNumber(){
	for(let i=1;i<=5;i++){
		pattern = ""
		for(let j=1;j<=i;j++){
			pattern += i.toString() + " "
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// 1 

// 2 2 

// 3 3 3 

// 4 4 4 4 

// 5 5 5 5 5 


// printRowNumber()


function invertedStar(){
	for(let i=5;i>=0;i--){
		pattern = ""
		for(let j=i;j>=0;j--){
			pattern += "* "
		}
		pattern += "\n"
		console.log(pattern)
	}
} 

// * * * * * * 

// * * * * * 

// * * * * 

// * * * 

// * * 

// * 


// invertedStar()

function invertedNumber(){
	for(let i=5;i>=0;i--){
		pattern = ""
		for(let j=i;j>=0;j--){
			pattern += j.toString() + " "
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// 5 4 3 2 1 0 

// 4 3 2 1 0 

// 3 2 1 0 

// 2 1 0 

// 1 0 

// 0 


// invertedNumber()

function middleStar(){
	for(let i=0;i<=5;i++){
		pattern = ""
		for(let j=0;j< 5-i;j++){
			pattern += " "
		}
		for(let j=0;j< 2*i+1;j++ ){
			pattern += "*"
		}
		for(let j=0;j < 5-i;j++){
			pattern += " "
		}
		pattern += "\n"
		console.log(pattern)
	}
}

//     *    

//    ***   

//   *****  

//  ******* 

// *********

// ***********


// middleStar()


function middleStarInverted(){
	for(let i=5;i>=0;i--){
		pattern = ""
		for(let j=0;j< 5-i;j++){
			pattern += " "
		}
		for(let j=0;j< 2*i+1;j++ ){
			pattern += "*"
		}
		for(let j=0;j < 5-i;j++){
			pattern += " "
		}
		pattern += "\n"
		console.log(pattern)
	}

}

// *********

//  ******* 

//   *****  

//    ***   

//     *  

//      *     

//     ***    

//    *****   

//   *******  

//  ********* 

// ***********

// ***********

//  ********* 

//   *******  

//    *****   

//     ***    

//      *    
// middleStar()
// middleStarInverted()

function horizontalPyramid(n){	
	for(let i=0;i<=(2*n)-1;i++){
		pattern = ""
		stars = i
		if(i>n) {
			stars = (2*n)-i
		}
		for(let j=0;j<stars;j++){
			pattern += "* "
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// * 

// * * 

// * * * 

// * * * * 

// * * * * * 

// * * * * 

// * * * 

// * * 

// * 


// horizontalPyramid(5)

function zeroOnePattern(){
	for(let i=0;i<5;i++){
		start = 0;
		pattern = ""
		if(i%2 == 0){
			start = 1;
		}
		for(let j=0;j<=i;j++){
			pattern += start.toString() + " "
			start = 1 - start;
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// 1 

// 0 1 

// 1 0 1 

// 0 1 0 1 

// 1 0 1 0 1 


// zeroOnePattern()


function numbersInverted(){
	for(let i=1;i<5;i++){
		pattern = ""
		start = 1
		for(let j=0;j<i;j++){
			pattern += start.toString()	
			start = start+1		
		}
		for(let k=0;k<(8-(2*i));k++){
			pattern += " "
		}
		for(let z=0;z<i;z++){
			start = start-1
			pattern+=start.toString()
			
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// 1      1

// 12    21

// 123  321

// 12344321


// numbersInverted()

function continuePyramid() {
	start = 1
	for(let i=0;i<5;i++){
		pattern = ""
		for(let j=0;j<i;j++){
			pattern += start.toString() + " "
			start = start + 1
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// 1 

// 2 3 

// 4 5 6 

// 7 8 9 10 

// continuePyramid()

function charPyramid(){	
	for(let i=1;i<=5;i++){
		start = 65
		pattern = ""
		for(let j=0;j<i;j++){
			pattern += String.fromCharCode(start)
			start = start + 1
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// A

// AB

// ABC

// ABCD

// ABCDE


// charPyramid()

function reverseCharPyramid() {
	for(let i=5;i>=1;i--){
		pattern = ""
		start = 65
		for(let j=1;j<=i;j++){
			pattern += String.fromCharCode(start)
			start = start+1
		}
		pattern += "\n"
		console.log(pattern)
	}
}

// ABCDE

// ABCD

// ABC

// AB

// A


// reverseCharPyramid()

function sameCharPyramid(){
	start = 65
	for(let i=1;i<=5;i++){
		
		pattern = ""
		for(let j=1;j<=i;j++){
			pattern += String.fromCharCode(start)
		}
		start = start + 1
		pattern += "\n"
		console.log(pattern)
	}
}

// A

// BB

// CCC

// DDDD

// EEEEE


// sameCharPyramid()

function reverseCharPyramid(){
	start = 65
	gap = 1
	for(let i=3;i>1;i--){
		for(let j=0;j<i;j++){
			pattern += " "
		}
		for(let k=0;k<(7-(2*i));k++){
			pattern += String.fromCharCode(start)
			
		}
	}
}