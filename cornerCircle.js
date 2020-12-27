//Corner circle
//A circle with radius r is placed in a right angled corner, where r is an integer and ≥ 1.
//
//circles
//What is the radius of the smaller circle, rounded to two decimal places?


//solution
let cornerCircle = r => Math.round(r * (Math.SQRT2 - 1) * (Math.SQRT2 - 1) * 100) / 100;


//another solution
function cornerCircle(r) {
  return Number((r / 5.8285).toFixed(2))
}

