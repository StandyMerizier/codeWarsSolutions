//Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
//
//You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
//
//The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
//
//Examples:
//findNb(1071225) --> 45
//findNb(91716553919377) --> -1
//mov rdi, 1071225
//call find_nb            ; rax <-- 45
//
//mov rdi, 91716553919377
//call find_nb            ; rax <-- -1


//solution
function findNb(m) {
  let n=0
  while(m>0){
    n=n+1
    m=m-Math.pow(n,3)
  }
  return m ? -1 : n;
}


//another solution
function findNb(m) {
    m = Math.sqrt(m) * 2;
    if (m != parseInt(m)){
      return -1;
    }
    var result = parseInt(Math.sqrt(m));
    return (result * (result + 1) == m) ? result : -1;
}
