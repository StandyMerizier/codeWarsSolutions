//The code does not execute properly. Try to figure out why.


//solution
object Multiply {
  def multiply(a: Int, b: Int) : Int = 
  {
    return a * b
  }
}


//another solution
object Multiply {
  def multiply: (Int, Int) => Int = _ * _
}
