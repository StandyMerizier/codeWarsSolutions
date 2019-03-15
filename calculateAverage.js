//Write function avg which calculates average of numbers in given list.


//solution
function find_average(array) {
  let total = 0
  for(let i = 0; i < array.length; i++){
    total += array[i]
  }
  return total/array.length
}


//another solution
function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}
