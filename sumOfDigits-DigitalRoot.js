//In this kata, you must create a digital root function.
//
//A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
//
//Here's how it works:
//
//digital_root(16)
//=> 1 + 6
//=> 7
//
//digital_root(942)
//=> 9 + 4 + 2
//=> 15 ...
//=> 1 + 5
//=> 6
//
//digital_root(132189)
//=> 1 + 3 + 2 + 1 + 8 + 9
//=> 24 ...
//=> 2 + 4
//=> 6
//
//digital_root(493193)
//=> 4 + 9 + 3 + 1 + 9 + 3
//=> 29 ...
//=> 2 + 9
//=> 11 ...
//=> 1 + 1
//=> 2


//solution
function digital_root(n) {
  return (n - 1) % 9 + 1;
}


//another solution
function digital_root(n) {
  var str = n.toString();
  var num = 0;
  
  if (str.length == 1) {
    return n;
  }
  
  var numArr = str.split("");
  
  for(i= 0; i < numArr.length; i++) {
    num = num + parseInt(numArr[i]);
  }
  
  return digital_root(num);
}
