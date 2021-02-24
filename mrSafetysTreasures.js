//Introduction
//Mr. Safety loves numeric locks and his Nokia 3310. He locked almost everything in his house. He is so smart and he doesn't need to remember the combinations. He has an algorithm to generate new passcodes on his Nokia cell phone.
//postimage
//
//Task
//Can you crack his numeric locks? Mr. Safety's treasures wait for you. Write an algorithm to open his numeric locks. Can you do it without his Nokia 3310?
//
//Input
//The str or message (Python) input string consists of lowercase and upercase characters. It's a real object that you want to unlock.
//
//Output
//Return a string that only consists of digits.
//Example
//``` unlock("Nokia") // => 66542 unlock("Valut") // => 82588 unlock("toilet") // => 864538 ```


//solution
function unlock(str) {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWYXZ",
        num = "22233344455566677778889999"
    return str.toUpperCase().split("").map(a=>num[char.indexOf(a)]).join("")
}


//another solution
function unlock(str)
{
   var codes=[2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,7,8,8,8,9,9,9,9]
   return [...str].reduce((a,c)=>a+codes[c.toUpperCase().charCodeAt(0)-65],'')
}

