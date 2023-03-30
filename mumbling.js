//This time no story, no theory. The examples below show you how to write function accum:
//
//Examples:
//
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.


//solution
function accum(s) {
  let mumble = ''
  let arr = s.toUpperCase().split('')
  let count = 0
  for(let i = 0; i<arr.length; i++){
    if(i<arr.length - 1){
      mumble += arr[i] + arr[i].repeat(count).toLowerCase() + '-'
      count++
    }
    else{
      mumble += arr[i] + arr[i].repeat(count).toLowerCase()
    }
  }
  return mumble
}


//another solution
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


//another solution
function accum(str) {
	var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

