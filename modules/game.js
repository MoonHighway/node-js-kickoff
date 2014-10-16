var dice = require("./bin/dice");

console.log("Rolling a default sided die and the results are:", dice.roll());
console.log("Rolling a 20 sided die:", dice.roll(20));

var roll = require("./bin/dice").roll;
console.log("Rolling with just the imported roll function:", roll(1000));

console.log("The typeof defaultFaces is:", typeof defaultFaces);
console.log("The typeof dice.defaultFaces is:", typeof dice.defaultFaces);