//Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.
//
//  onlyOne() --> false
//  onlyOne(true, false, false) --> true
//  onlyOne(true, false, false, true) --> false
//  onlyOne(false, false, false, false) --> false  


//solution
function onlyOne(...args) {
  return args.filter(function(x) { return Boolean(x); }).length === 1
}


//optimizied solution
const onlyOne = (...args) => args.filter(Boolean).length === 1
