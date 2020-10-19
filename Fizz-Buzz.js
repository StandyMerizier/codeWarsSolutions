//Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.
//
//For example, solution(20) should return [5, 2, 1]


//solution
function solution(number){
  let [fizz, buzz, fizzBuzz] = [0, 0, 0]
  while (number-- > 1) {
    if (number % 3 === 0 && number % 5 === 0) fizzBuzz++
    else if (number % 3 === 0) fizz++
    else if (number % 5 === 0) buzz++
  }
  return [fizz, buzz, fizzBuzz]
}


//another solution
function solution(n) {
  --n;
  const c15 = Math.floor(n / 15);
  const c3 = Math.floor(n / 3) - c15;
  const c5 = Math.floor(n / 5) - c15;
  return [c3, c5, c15];
}

