//Write a function that returns a string in which firstname is swapped with last name.
//
//nameShuffler('john McClane'); => "McClane john"


//solution
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}


//other solution
function nameShuffler(str) {
  return str.replace(/^(.*) (.*)$/, '$2 $1')
}
