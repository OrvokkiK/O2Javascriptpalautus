if (confirm('Should I calculate the square root?')) {
} else {
    txt = 'he square root is not calculated.'
    document.querySelector('#sqrt').innerHTML = txt;
}

let value = parseFloat(prompt('Pick a positive number:'))

if (value < 0) {
    document.querySelector('#sqrt').innerHTML = 'The square root of a negative number is not defined.';
} else {
    document.querySelector('#sqrt').innerHTML = Math.sqrt(value);
}

