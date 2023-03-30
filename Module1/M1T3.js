'use strict';
let x = parseInt(prompt('Anna yksi kokonaisluku'));
let y = parseInt(prompt('Anna toinen kokonaisluku'));
let z = parseInt(prompt('Anna kolmas kokonaisluku'));

let summa = x + y + z;
let tulo = x * y * z;
let ka = summa / 3;

document.querySelector('#summa').innerHTML = 'Summa:' + summa;
document.querySelector('#tulo').innerHTML = 'Tulo:' + tulo;
document.querySelector('#ka').innerHTML = 'keskiarvo:' + ka;



