function maze(col, row,ch){
	if(col==2 || row==2){
		console.log(ch)
		return 1
	}
	return maze(col+1,row, ch+"d") + maze(col, row+1,ch+"r")
}

function printMaze(col, row,ch){
	if(col==2 && row==2){
		console.log(ch)
		return 1
	}
	if(col<2){
		printMaze(col+1,row, ch+"d")
	}
	if(row<2){
		printMaze(col, row+1,ch+"r")
	}
}

function mazeObstacle(col,row){
	if(matrix[col][row]==1){
		return 0
	}
	if(col==2|| row==2){
		return 1
	}
	return mazeObstacle(col+1, row) + mazeObstacle(col, row+1)
}

function backtrack(row,col,arr,ch,step,arr2){
	if(row == 2 && col ==2){
		console.log(ch)
		console.log(arr2)
		return 
	}
	if (arr[row][col] === 1) {
        return;
    }

	arr[row][col] = 1
	arr2[row][col] = step
	if(col>0){		
		backtrack(row,col-1,arr,ch+'l',step+1,arr2)
	}
	if(row>0){
		backtrack(row-1,col,arr,ch+'u',step+1, arr2)
	}
	if(row<arr.length-1){
		backtrack(row+1,col,arr, ch+"d",step+1, arr2)
	}
	if(col<arr[0].length-1){
		backtrack(row,col+1,arr,ch+"r",step+1, arr2)
	}
	arr[row][col] = 0
	arr2[row][col] = 0
}


const matrix = [[0,0,0],[0,0,0],[0,0,0]]
const matrix2 = [[0,0,0],[0,0,0],[0,0,0]]
console.log(backtrack(0,0,matrix,"",1,matrix2))