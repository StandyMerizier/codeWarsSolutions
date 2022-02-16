// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 
// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


//solution
var isValid = function(s) {
    let temp = [];
    for (let i=0;i<s.length;i++) {
        switch (s[i]) {
            case "(" :
                temp.push("(");
                break;
            case "{" :
                temp.push("{");
                break;
            case "[" :
                temp.push("[");
                break;
            case ")" :
                if(temp.pop() == "(") break;
                else return false;  
            case "}" :
                if(temp.pop() == "{") break;
                else return false;  
            case "]" :
                if(temp.pop() == "[") break;
                else return false;  
        }
    }
    return temp.length===0;  
};
