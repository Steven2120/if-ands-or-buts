const ps = require("prompt-sync");
const prompt = ps();

let person1 = Number(prompt("Enter how much person 1 paid: "));
let person2 = Number(prompt("Enter how much person 2 paid: "));
let difference = 0;

if (person1 > person2) {
  difference = person1 - person2;
  console.log(`Person 2 owes ${difference / 2} to Person 1`);
} else {
  difference = person2 - person1;
  console.log(`Person 1 owes ${difference / 2} to Person 2`);
}
