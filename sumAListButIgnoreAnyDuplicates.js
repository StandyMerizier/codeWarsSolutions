// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.


//solution
function sumNoDuplicates(numList) {
  let output = 0;
  const hashmap = new Map();
  
  for (let i = 0; i < numList.length; i++) {
    const num = numList[i];
    
    if (hashmap.has(num)) {
      const currentCount = hashmap.get(num);
      if (currentCount === 1) output -= num;
      hashmap.set(num, currentCount + 1);
    } else {
      hashmap.set(num, 1);
      output += num;
    }
  }
  return output;
}


//another solution
function sumNoDuplicates(numList) {
const uniqueArr=numList.filter((num,index)=>numList.indexOf(num)===index&&numList.lastIndexOf(num)===index)
return uniqueArr.reduce((x,y)=>x+y,0);
}


//another solution
function sumNoDuplicates(arr) {
        let uniqueArr = [];
        let sum = 0;
        arr.forEach(num => {
            if (arr.indexOf(num) === arr.lastIndexOf(num)) {
                uniqueArr.push(num);
                sum += num;
            }
        });
        return sum;
}
