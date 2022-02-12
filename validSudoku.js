// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 
// Example 1:

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.


//solution
var isValidSudoku = function(board) {

    const map = {};                            // Map for storing our key-strings.
    
    for (let i = 0; i < 9; i++) {              // Outer-loop for rows.
        for (let j = 0; j < 9; j++) {          // Inner-loop for cols.
            
            if (board[i][j] === '.') continue; // Skip checking empty spaces.
            
            let num = board[i][j],
                x   = Math.floor(i / 3),       // We can iterate through each box
                y   = Math.floor(j / 3);       // using indices (i, j) divided by 3.
                
			let err = (map['r'+i+num] ||       // Check if any of the computed
					   map['c'+j+num] ||       // key-strings already exist in
					   map['b'+x+y+num]);      // our map object.
            
            if (err) return false;             // If 'err' is true, board is invalid.
            
            map['r'+i+num]   = 1;              // Add 'row' key-string to map.
            map['c'+j+num]   = 1;              // Add 'col' key-string to map.
            map['b'+x+y+num] = 1;              // Add 'box' key-string to map.
        }
    }
    
    return true;                               // If no error, board is valid.
};

