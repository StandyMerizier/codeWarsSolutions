//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.

//Solution
function findShort(s){
  let smallWord = 100
  let words = s.split(' ')
  for(let i = 0; i<words.length;i++){
    let count = words[i].length
    if(count< smallWord){
      smallWord = count
    }
  }
  return smallWord
}

//optimized solution
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
