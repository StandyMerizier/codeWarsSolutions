//Welcome. In this kata, you are asked to square every digit of a number.
//
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
//Note: The function accepts an integer and returns an integer


//solution
function squareDigits(num){
  console.log(num)
  let numArr = num.toString().split('')
  for(let i = 0; i<numArr.length; i++){
    numArr[i] = Math.pow(parseInt(numArr[i]), 2)
  }
  return parseInt(numArr.join(''))
}


//another solution
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join('')); 
}
