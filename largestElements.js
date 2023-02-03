// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]


//solution
function largest(n, array) {
  // Find the n highest elements in a list
  let sortedArray = array.sort((a, b) => a - b)
      
  return sortedArray.splice(array.length-n);
  
}


//optimized solution
const largest = function(n,xs){
  return n === 0 ? [] : xs.sort((a, b)=> a - b).slice(-n)
}
