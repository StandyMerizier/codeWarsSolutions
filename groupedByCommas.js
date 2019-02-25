//Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.
//
//Assume: 0 <= n < 1000000000
//Examples
//
//       1  ->           "1"
//      10  ->          "10"
//     100  ->         "100"
//    1000  ->       "1,000"
//   10000  ->      "10,000"
//  100000  ->     "100,000"
// 1000000  ->   "1,000,000"
//35235235  ->  "35,235,235"


//solution
function groupByCommas(n) {
   return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


//another solution
function groupByCommas(n) {
  return n.toString()
    .split('')
    .reverse()
    .reduce(function(res, c, i, a){ return res + c + (!((i + 1)%3 || i === a.length - 1) ? ',' : '') }, '')
    .split('')
    .reverse()
    .join('')
}
