// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// Good Luck!


//solution
function convertHashToArray(hash){
  //your code here - sort the keys!
  return Object.entries(hash).sort()
}


//optimzed solution
const convertHashToArray = o => Object.entries(o).sort();
