// Modify the age.js program you wrote in the exercises for the Input/Output
// chapter. The updated code should use a for loop to display the future ages.

// Solution:

let readlineSync = require('readline-sync');
let age = parseInt(readlineSync.question('Hold old are you? '));
console.log(`You are ${age} years old.`);
for (let index = 10; index <= 40; index += 10) { 
  console.log(`In ${index} years, you will be ${age + index} years old.`);
}