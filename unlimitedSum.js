//Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.
//
//The function should reject any arguments that are not integers, and sum the remaining integers.
//
//sum(1, 2, 3)   // -> 6
//sum(1, "2", 3) // -> 4
//


//solution
function sum(...num){
  let number = num
  let numbers = number.filter( el => { if((typeof el === 'number') && (el%1 === 0)) return el })
  let sum = numbers.reduce( function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue; } , 0 );
  return sum
}


//another solution
function sum() {
  return [].slice.apply(arguments).reduce(function(p, c) {return c === ~~c ? p + c : p;}, 0);
}
