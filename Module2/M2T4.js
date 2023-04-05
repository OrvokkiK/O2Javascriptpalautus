'use strict';
let numbers = [];

while (true) {
    let num = parseInt(prompt("Enter a number (enter 0 to stop):"));
    if (num === 0) {
        break;
    }
   numbers.push(num);
}

numbers.sort(function(a, b) {
				return b - a;
})

console.log(numbers);