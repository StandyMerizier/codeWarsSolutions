// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


//solution
function solution(str){
  let arr=[];
  let strArr = str.split('');
  for(let i = 0; i < strArr.length; i += 2){
    arr.push(str.slice(i,i+2))
  }
  
  return arr.map(el => el.length === 1 ? el + '_' : el)
}


//another solution
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}

