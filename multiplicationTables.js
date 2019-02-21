//Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.
//
//Example:
//
//multiplication_table(3,3)
//
//1 2 3
//2 4 6
//3 6 9
//
//-->[[1,2,3],[2,4,6],[3,6,9]]
//
//Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.


//solution
function multiplicationTable(row,col){
  let multArr = []
  for(let i=0; i < row; i++){
    multArr.push([])
    for(let j=0; j < col; j++){
      multArr[i].push((i+1)* (j+1))
    }
  }
  return multArr
}


//another solution
const multiplicationTable = (row, col) => Array(...Array(row)).map((_, i) => Array(...Array(col)).map((_, j) => (i + 1) * (j + 1)));
