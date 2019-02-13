//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
//! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
//
//##Examples :
//
//iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
//
//iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd


//solution
function iqTest(numbers){
  numbers  = numbers.split(' ').map((el) => parseInt(el) )  
  let odd = numbers.filter((el) => {return el % 2 !== 0});
  let even = numbers.filter((el) => {return el % 2 === 0});
  
  return odd.length === 1 ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1)
}


//another solution
function iqTest(numbers){
  var nums = numbers.split(" ").map(x => x % 2);  
  var sum = nums.reduce((a,b) => a + b);  
  var target = sum > 1 ? 0 : 1;
  
  return nums.indexOf(target) + 1;
}


//another solution
function iqTest(numbers){
  var m = numbers.match(/[02468]\b.*[02468]\b/.test(numbers) ? /\d*[13579]\b/ : /\d*[02468]\b/)[0];
  return numbers.split(' ').indexOf(m) + 1;
}
