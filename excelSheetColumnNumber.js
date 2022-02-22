// Given a string columnTitle that represents the column title as appear in an Excel sheet, return its corresponding column number.

// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701

// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.
// columnTitle is in the range ["A", "FXSHRXW"].


//solution
var titleToNumber = function(s) {
    let map = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10,
        'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20,
        'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26
    }
    
    let output = 0, len = s.length
    
    for (let i = 0; i < len; i++) {
        output += map[s.charAt(i)] * 26 ** (len - i - 1)
    }
    
    return output
};


//another solution
var titleToNumber = function(s) {
    let colNum = 0;
    for (let i = s.length - 1, powerOf26 = 1; i >= 0; i--, powerOf26 *= 26) {
        colNum += powerOf26 * (s.charCodeAt(i) - 64);
    }    
    return colNum;
};
