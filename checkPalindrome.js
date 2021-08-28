// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A non-empty string consisting of lowercase characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 105.

// [output] boolean

// true if inputString is a palindrome, false otherwise.


//solution
function checkPalindrome(inputString) {
    for(let i = 0; i < inputString.length/2; i++){
        let end = inputString.length - 1
        if (inputString[i] !== inputString[end - i]) {
            return false
        }
    }
    return true
}

//another solution
checkPalindrome = s => Buffer(s).reverse() == s
