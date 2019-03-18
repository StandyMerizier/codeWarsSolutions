//Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.
//
//Example:
//
//keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
//
//Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?


//solution
function keysAndValues(data){
  let keysArray= []
  let valuesArray = []
  let output = []
  if(typeof data === 'object' && data !== null){
    for(const key in data){
      keysArray.push(key)
      valuesArray.push(data[key])
    }
  }
  output.push(keysArray, valuesArray)
  return output
}


//another solution
function keysAndValues(data){
    var arr = [];
    arr.push(Object.keys(data));
    arr.push(Object.keys(data).map(function(x){return data[x]}))
    return arr
}
