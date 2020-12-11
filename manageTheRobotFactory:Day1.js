//Explanation
//It's your first day in the robot factory and your supervisor thinks that you should start with an easy task. So you are responsible for purchasing raw materials needed to produce the robots.
//
//A complete robot weights 50 kilogram. Iron is the only material needed to create a robot. All iron is inserted in the first machine; the output of this machine is the input for the next one, and so on. The whole process is sequential. Unfortunately not all machines are first class, so a given percentage of their inputs are destroyed during processing.
//
//Task
//You need to figure out how many kilograms of iron you need to buy to build the requested number of robots.
//
//Example
//Three machines are used to create a robot. Each of them produces 10% scrap. Your target is to deliver 90 robots.
//The method will be called with the following parameters:
//
//CalculateScrap(scrapOfTheUsedMachines, numberOfRobotsToProduce)
//CalculateScrap(int[] { 10, 10, 10 }, 90)
//Assumptions
//The scrap is less than 100%.
//The scrap is never negative.
//There is at least one machine in the manufacturing line.
//Except for scrap there is no material lost during manufacturing.
//The number of produced robots is always a positive number.
//You can only buy full kilograms of iron.


//solution
function calculateScrap(scraps, numberOfRobots) {
  return Math.ceil(scraps.reduceRight((a, b) => a*100/(100-b), numberOfRobots * 50));
}

