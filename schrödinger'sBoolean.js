//Can a value be both true and false?
//
//Define omniBool so that it returns true for the following:
//
//omniBool == true && omniBool == false
//If you enjoyed this kata, be sure to check out my other katas.


//solution
class OmniBool {
  constructor() {
    this.n = false;
  }
}

OmniBool.prototype[Symbol.toPrimitive] = function() { 
  this.n = !this.n;
  return this.n;
};

let omnibool = new OmniBool();


//another solution
var omnibool = {}
omnibool.valueOf = () => Math.random() > 0.5

