//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
//Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"


//solution
let reverseWords = str => str.split(" ").map( a => a.split("").reverse().join("")).join(" ");


//another solution
var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)
