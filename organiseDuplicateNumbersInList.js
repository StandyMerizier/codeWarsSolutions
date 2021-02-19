//Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.
//
//Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:
//
//group([3, 2, 6, 2, 1, 3])
//>>> [[3, 3], [2, 2], [6], [1]]
//Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.


//solution
function group(arr) {
    let newArr = [];
    while(arr.length) {
        let item = arr[0],
            count = arr.filter(a => a === item).length;
        arr = arr.filter(a => a !== item);
        newArr.push(Array(count).fill(item))
    }
    return newArr;
}


//another solution
function group(arr) {
  var result = [];
  while(arr.length > 0)
  {
    result.push(arr.filter(a => a == arr[0]));
    arr = arr.filter(a => a != arr[0]);    
  }
  return result;
}

