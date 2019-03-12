//Given an array of integers.
//
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//
//If the input array is empty or null, return an empty array.
//Example
//
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
//


//solution
function countPositivesSumNegatives(input) {
  let output  = []
  let evenCount = 0
  let oddSum = 0
  if(Array.isArray(input)){
    if(input.length >= 1){
      for(let i=0; i<input.length; i++){
        if(input[i] > 0){
          evenCount+=1
        }
        else if(input[i] < 0){
          oddSum += input[i]
        }
      }
      output.push(evenCount)
      output.push(oddSum)
      return output
    }
  }
  return []
}


//another solution
function countPositivesSumNegatives(input) {
  return input && input.length ? input.reduce(function(p, c, i, s){
    c <= 0 ? p[1] += c : p[0] += 1;
    return p;
  }, [0, 0]) : [];
}
