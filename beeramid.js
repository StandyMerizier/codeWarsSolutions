//Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.
//
//A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
//
//Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
//
//1) your referral bonus, and
//
//2) the price of a beer can
//
//For example:
//
//beeramid(1500, 2); // should === 12
//beeramid(5000, 3); // should === 16


//solution
var beeramid = function(bonus, price) {
  let beers = ~~(bonus / price), num = 0;
  while(beers >= num * num)
    beers -= num * num++;
  return num > 0 ? num - 1 : 0;
}


//another solution
var beeramid = function(bonus, price) {
  var i = 1
  while(i*i*i/3+i*i/2+i/6-bonus/price<=0){
  i++}
  return i-1
}

