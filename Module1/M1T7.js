noppa_lkm = parseInt(prompt("How many die should be used?"))
let figures = 0;
let roll = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    //min ja max kuuluu joukkoon
}

for (let i = 0; i < noppa_lkm; i++) {
    roll = getRandomInt(1,6)
    console.log(roll)
    figures += roll;
}

document.querySelector('#noppa').innerHTML = 'The sum of the dice rolls for ' + noppa_lkm + ' die is ' + figures;