// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)


//solution
function vowelIndices(word){
  let set = new Set(['a', 'e', 'i', 'o', 'u', 'y'])
  let returnArr = []
  
  for(let i in word) {
    if(set.has(word[i].toLowerCase())){
      returnArr.push(Number(i) +1)
    }
  }
  
  return returnArr
}


//another solution
const vowelIndices = (word) => [...word].map((el, i) => el.match(/[aeiouy]/ig) ? i+1 : '').filter(el => el)
