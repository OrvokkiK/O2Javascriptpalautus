'use strict';
let name = prompt("What is your name?")
let house;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    //min ja max kuuluu joukkoon
}

const numHouse = getRandomInt(1,4);
switch (numHouse) {
    case 1:
        house = 'Gryffindor';
        break
    case 2:
        house = 'Slytherin';
        break
    case 3:
        house = 'Hufflepuff';
        break
    case 4:
        house = 'Ravenclaw';
        break
}
document.querySelector('#name').innerHTML = name + ', you are a ' + house;