// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


//solution
function XO(str) {
  // set entire string to lowercase
  let strng = str.toLowerCase()
  // Google: how to count number of letter in string javascript
  // results of google search, implement to count number of Os and number of Xs
  let ex = strng.replace(/[^x]/g, "").length
  let oh = strng.replace(/[^o]/g, "").length
  // return the comparison of the counts (for example if 0 == 0 then yay)
  // return countOfXs == countOfOs
//   return strng.count(ex) == strng.count(oh)
  return ex == oh;
}


//optimized solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
