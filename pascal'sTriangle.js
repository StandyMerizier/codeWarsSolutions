// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 
// Constraints:

// 1 <= numRows <= 30

//solution
var generate = function(numRows) {
    let retArr = []
    let i = 0;
    
    while (i < numRows) {
        if (i === 0) {
            retArr.push([1]);
        } else {
            let newRow = [];
            for (let j = 0; j <= retArr[i-1].length; j++) {
                if (j-1 < 0 || j === retArr[i-1].length) {
                    newRow.push(1);
                } else {
                    newRow.push(retArr[i-1][j-1] + retArr[i-1][j]);
                }
            }
            retArr.push(newRow);
        }
        i++;
    }
    return retArr;
};


//another solution
var generate = function(numRows) {
    var pascal = [];
    for (var i = 0; i < numRows; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (var j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        pascal[i][i] = 1;
    }
    return pascal;
};
