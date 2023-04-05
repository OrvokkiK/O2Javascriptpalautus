'use strict';
var numbers = [];

while (true) {
  var input = parseInt(prompt("Enter a number (or 0 to stop):"));
  if (input === 0) {
    break;
  }
  if (numbers.includes(input)) {
    alert("You already entered that number!");
    break;
  }
  numbers.push(input);
}

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);






