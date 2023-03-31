'use strict';
const year = parseInt(prompt("Anna vuosiluku:"))
let leap = false;

if (year < 400) {
    if (year % 4 == 0) {
        leap = true;
    }
    if (year % 100 == 0 && year % 400 == 0){
        leap = true;
    }}
else {
    leap = false
}
if (leap == false) {
    document.querySelector('#year').innerHTML = year + 'is not a leap year.';
}

if (leap == true) {
    document.querySelector('#year').innerHTML = year + 'is a leap year.';
}

else {
   document.querySelector('#year').innerHTML = 'An Error has occured';
}