//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//
//Example
//filter_list([1,2,'a','b']) == [1,2]
//filter_list([1,'a','b',0,15]) == [1,0,15]
//filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


//solution
function filter_list(l) {
  let numL = []
  for(let i = 0; i<l.length; i++){
    if(typeof l[i] === 'number'){
      numL.push(l[i])
    } 
  }
  return numL
}


//another solution
function filter_list(l) {
 return l.filter(v => typeof v == "number")
}

