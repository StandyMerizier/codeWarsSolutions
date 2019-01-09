//Given a string, swap the case for each of the letters.
//
//e.g. CodEwArs --> cODeWaRS
//
//Examples
//swap ""         `shouldBe` ""
//swap "CodeWars" `shouldBe` "cODEwARS"
//swap "abc"      `shouldBe` "ABC"
//swap "ABC"      `shouldBe` "abc"
//swap "123235"   `shouldBe` "123235"


//solution
function swap(str){
  return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('')
}


//another solution
function swap(str) {
  return str.replace(/./g, c => c < "a" ? c.toLowerCase() : c.toUpperCase())
}
