//Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)
//
//Matrix = array of n length whose elements are n length arrays of integers.
//
//3x3 example:
//
//diagonals( [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
//] ); 
//
//returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7


//solution
function sum(matrix) {
  let primary = 0;
  let secondary = 0;
  for (var i in matrix){
    for (var j in matrix[i]){
      if (i === j){
        primary += matrix[i][j]
      }
      if (parseInt(i) + parseInt(j) === (matrix.length -1)){
        secondary += matrix[i][j]
      }
    }
  }
  return primary + secondary;
}


//another solution
const sum = matrix => matrix.reduce((sum, line, i) => sum + line[i] + line[matrix.length-i-1], 0)
