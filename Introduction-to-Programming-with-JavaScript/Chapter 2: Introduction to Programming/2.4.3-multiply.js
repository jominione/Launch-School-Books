// Write a program that uses a multiply function to multiply two numbers and
// returns the result. Ask the user to enter the two numbers, then output
// the numbers and result as a simple equation.

// Example:

// $ node multiply.js
// Enter the first number: 3.141592653589793
// Enter the second number: 2.718281828459045
// 3.141592653589793 * 2.718281828459045 = 8.539734222673566

// Solution:

function multiply(left, right) {
  return left * right
};

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let firstNumber = getNumber('Enter the first number: ');
let secondNumber = getNumber('Enter the second number: ');
console.log(`${firstNumber} * ${secondNumber} = ` +
            `${multiply(firstNumber, secondNumber)}`);