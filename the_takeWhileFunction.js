//Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.
//
//function isEven(num) {
//  return num % 2 === 0;
//}
//var seq = [2,4,6,8,1,2,5,4,3,2];
//
//takeWhile(seq, isEven) // -> [2,4,6,8]
//Your task is to implement the takeWhile function.
//
//If you've got a span function lying around, this is a one-liner! Also, if you liked this problem, you'll surely love the dropWhile function.


//solution
function takeWhile (arr, pred) {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    if(pred(arr[i])){
      res.push(arr[i])
    } else {
      return res;
    }
  }
  return res;
}


//another solution
function takeWhile (arr, pred) {
  return arr.filter((x,i) => arr.slice(0,i+1).every(pred));
}
