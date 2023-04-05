'use strict';
const num_p = parseInt(prompt('How many participants are there?'));
let names = [];
for (let i = 0; i < num_p; i++) {
    name = prompt('Enter your name:')
    names.push(name)
}

names.sort()

console.log(names)

let ol = document.createElement("ol");

for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(names[i]);
    li.appendChild(text);
    ol.appendChild(li);
}

document.getElementById('names_li').appendChild(ol);