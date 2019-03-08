//Complete the square sum method so that it squares each number passed into it and then sums the results together.
//
//For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.


//solution
function squareSum(numbers){
 return numbers.reduce( (accumulator, currentValue) =>  accumulator + Math.pow(currentValue, 2), 0)
}


//another solution
function squareSum(numbers){
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
