//Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
//
//flatten([1,2,3]) // => [1,2,3]
//flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
//flatten([[[1,2,3]]]) // => [[1,2,3]]


//solution
var flatten = function (array){
  return Array.isArray(array) ? [].concat(...array) : array;
}


//another solution
var flatten = function (array){
  return array.reduce(function(a,z) {
    return a.concat(z);
  }, []);
}
