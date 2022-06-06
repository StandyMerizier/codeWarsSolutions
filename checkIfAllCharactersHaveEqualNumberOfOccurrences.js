// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 
// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.


//solution
var areOccurrencesEqual = function(s) {
    const arr = s.split('').sort();
    let index = 1;
    let initLen = 0;
    
    while(arr[index] === arr[0]) index++;
    initLen = index;
    
    while(index < arr.length) {
        if(arr[index] !== arr[index + initLen - 1] || arr[index] === arr[index + initLen]) {
            return false; 
        } 
        index = index + initLen;
    }
    return true;
};
