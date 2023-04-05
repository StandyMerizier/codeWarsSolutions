//Given an array, find the int that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.


//solution
function findOdd(A) {
  let mapA = new Map()
  for(let i = 0; i < A.length; i++){
    if([A[i]] in mapA){
      mapA[A[i]]++
    }
    else{
      mapA[A[i]] = 1
    }
  }
  for(let key in mapA){
    if(mapA[key] % 2 !== 0){
      return parseInt(key)
    }
  }
}


//optimized solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

