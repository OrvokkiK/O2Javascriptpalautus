'use strict';

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

let result = 0;
let rolls = [];

while (result !== 0) {
    result = rollDice();
    rolls.push(result)
}

let list = document.createElement("ul");
for (let i = 0; i < rolls.length; i++) {
    let item = document.createElement("li");
    item.appendChild(document.createTextNode("Roll " + (i + 1) + ": " + rolls[i]));
    list.appendChild(item);
}

document.getElementById('#roll')

