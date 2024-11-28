var arr2 = []
function subset(arr, arr1){
	if(arr.length ==0){
		arr2.push([...arr1]);
		return
	}
	const num = arr[0]
	subset(arr.slice(1),arr1)
	arr1.push(num)
	subset(arr.slice(1),arr1)
	arr1.pop()
}

const arr = [3,5,9]
subset(arr,[])
console.log(arr2)