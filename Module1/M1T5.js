'use strict';
const year = parseInt(prompt("Enter a year"));
function leap_check(year) {
    if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
       document.querySelector('#year').innerHTML = year + ' is a leap year.';
    } else {
       document.querySelector('#year').innerHTML = year + ' is not a leap year.';
    }
}

leap_check(year);