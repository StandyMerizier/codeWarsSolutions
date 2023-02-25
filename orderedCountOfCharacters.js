// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


//solution
const orderedCount = function (text) {
  const hashmap = new Map()
  
  for(let i = 0; i<text.length; i++){
    const letter = text[i]
    
    if(hashmap.has(letter)){
      const currentValue = hashmap.get(letter)
      hashmap.set(letter, currentValue + 1)
    }
    else {
      hashmap.set(letter, 1)
    }
  }
  
  return [ ...hashmap.entries()];
}


//another solution
const orderedCount = str => [...new Set([...str])].map(char => [char, str.split(char).length - 1])
