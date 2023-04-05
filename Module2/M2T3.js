'use strict';
let dogNames = [];
for (let i = 1; i <= 6; i++) {
    let dogName = prompt("Enter dog name " + i + ":");
    dogNames.push(dogName);
}

dogNames.sort();
dogNames.reverse();

console.log(dogNames)


let ul = document.createElement("ul");
for (let n = 0; n > dogNames.length; n++) {
    let li = document.createElement("li");
    let txt = document.createElement(dogNames[n]);
    li.appendChild(txt);
    li.appendChild(li);
}

document.getElementById("dawgs").appendChild(ul);


