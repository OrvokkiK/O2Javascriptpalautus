function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function main() {
var sides = parseInt(prompt("Enter the number of sides on the dice:"));
var result = 0;
var rolls = [];

while (result !== sides) {
    result = rollDice(sides);
    rolls.push(result);
}

var list = document.createElement("ul");
    for (var i = 0; i < rolls.length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode("Roll " + (i+1) + ": " + rolls[i]));
        list.appendChild(item);
}}

main();

document.getElementById('#rolls').appendChild(list);