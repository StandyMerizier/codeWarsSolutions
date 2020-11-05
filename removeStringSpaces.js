//Simple, remove the spaces from the string, then return the resultant string.


//solution
function noSpace(x){
  return x.replace(/\s/g, '')
}


//another solution
function noSpace(x){return x.split(' ').join('')}
