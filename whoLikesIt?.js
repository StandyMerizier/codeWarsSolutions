//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
//Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
//
//likes [] // must be "no one likes this"
//likes ["Peter"] // must be "Peter likes this"
//likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
//likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
//likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"


//solution
function likes(names) {
  let count = names.length
  if(count === 0){
    return 'no one likes this'
  }
  else if(count === 1){
    return `${names[0]} likes this`
  }
  else if(count === 2){
    return `${names[0]} and ${names[1]} like this`
  }
  else if(count === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else{
    return `${names[0]}, ${names[1]} and ${count - 2} others like this`
  }
}
