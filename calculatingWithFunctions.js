//This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
//JavaScript:
//
//seven(times(five())); // must return 35
//four(plus(nine())); // must return 13
//eight(minus(three())); // must return 5
//six(dividedBy(two())); // must return 3
//
//Ruby:
//
//seven(times(five)) # must return 35
//four(plus(nine)) # must return 13
//eight(minus(three)) # must return 5
//six(divided_by(two)) # must return 3
//
//Requirements:
//
//    There must be a function for each number from 0 ("zero") to 9 ("nine")
//    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
//    Each calculation consist of exactly one operation and two numbers
//    The most outer function represents the left operand, the most inner function represents the right operand
//    Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
//


//solution
function zero(func) { 
  if (func === undefined) return 0
  else return func(0)
}
function one(func) {
  if (func === undefined) return 1
  else return func(1)
}
function two(func) {
  if (func === undefined) return 2
  else return func(2)
}
function three(func) {
  if (func === undefined) return 3
  else return func(3)
}
function four(func) {
  if (func === undefined) return 4
  else return func(4)
}
function five(func) {
  if (func === undefined) return 5
  else return func(5)
}
function six(func) {
  if (func === undefined) return 6
  else return func(6)
}
function seven(func) {
  if (func === undefined) return 7
  else return func(7)
}
function eight(func) {
  if (func === undefined) return 8
  else return func(8)
}
function nine(func) {
  if (func === undefined) return 9
  else return func(9)
}

function plus(number) {
  return function(current){
      return current + number
  }
}
function minus(number) {
  return function(current){
      return current - number
  }
}
function times(number) {
  return function(current){
    return current * number
  }
}
function dividedBy(number) {
  return function(current){
      return parseInt(current / number)
  }
}

