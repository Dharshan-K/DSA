 function hello_world(n){
 	if(n==5){
 		console.log(n)
 		return 
 	}
 	
 	hello_world(n+1) 
 	console.log(n)	
 } 


 // hello_world(1)



 function fibonacciNumber(n){
 	if(n<2){
 		return n
 	}
 	return fibonacciNumber(n-1) + fibonacciNumber(n-2)
 	 
 }

 // console.log(fibonacciNumber(40))

 function binarySearch(start,end,arr, target){ 
 	mid = start + (end - start) / 2
 	if( start > end){
 		return -1
 	}
 	if(arr[mid] == target){
 		return mid
 	}
 	if(arr[mid] < target){
 		return binarySearch(mid+1,end,arr, target)
 	}
 	if(arr[mid]>target){
 		return binarySearch(start,mid-1,arr,target)
 	}
 }

 arr = [1,2,3,4,5,67,78]  

 // console.log(binarySearch(0,arr.length-1,arr,55))

 function factorial(n){
 	if(n==1){
 		return 1
 	}
 	return n * factorial(n-1)
 }

 function sumDigits(n){
 	mid = n%10
 	if(n==0){
 		return 1;
 	}
 	return mid * sumDigits((n-mid)/10)

 }
sum = 0
 function reverseDigits(n){
 	if(n==0){
 		return sum
 	}
 	sum = sum*10 + (n%10)
 	return reverseDigits(Math.floor(n/10))
 }

1342

function numberPalindrome(n){
	if(n == reverseDigits(n)){
		console.log("palindrome")
	}
}

// console.log(numberPalindrome(1321))
 // console.log(sumDigits(505))

// arr = []
// length = arr.length
function checkSorted(start,end,arr){
	if(end>length){
		return "sorted"
	}
	if(arr[end]<arr[start]){
		return "not sorted"
	}
	return checkSorted(start+1, end+1, arr)
}

// console.log(checkSorted(0,1,arr))

arr = [3,2,1,18,9]

function linearSearchRecursion(index,arr, target){
	if(index > arr.length - 1){
		return false
	}
	if(arr[index]==target){
		return index
	}
	return linearSearchRecursion(index+1, arr,target)

}

// console.log(linearSearchRecursion(0 ,arr,10))
function reduceNumber(n, count){
	if(n<=0){
		console.log("zero", n,count)
		return count
	}
	if(n%2 == 0){		
		count = count + 1
		console.log(n,count)
		return reduceNumber(n/2,count)
	}else{
		count = count + 1
		console.log(n,count)
		return reduceNumber(n-1,count)
	}
}

// console.log(reduceNumber(14,0))

function circularGame(n,k,arr,target){
	console.log(n)
	if(n==0){
		return arr
	}
	arr.delete((target-1)+2)
	return circularGame(n-1,k,arr,target+2)
}

arr = new Set([1,2,3,4,5])
n = 5
k = 2
console.log(circularGame(n,k,arr,1))

5,2,arr,1
4,2,arr,3
3,2,arr,5