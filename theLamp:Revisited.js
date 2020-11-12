//Define a class called Lamp. It will have a string attribute for color and boolean attribute, on, that will refer to whether the lamp is on or not. Define your class constructor with a parameter for color and assign on as false on initialize.
//
//Give the lamp an instance method called toggleSwitch that will switch the value of the on attribute.
//
//Define another instance method called state that will return "The lamp is on." if it's on and "The lamp is off." otherwise.


//solution
class Lamp {
  constructor(color, on=false){
    this.color = color;
    this.on = on;
  }
  toggleSwitch(){
    this.on = !this.on;
  }
  state(){
    return this.on ? 'The lamp is on.' : 'The lamp is off.';
  }
}
