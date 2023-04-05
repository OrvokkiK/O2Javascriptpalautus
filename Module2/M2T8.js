'use strickt';

function concat(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

var names = ["Johnny", "DeeDee", "Joey", "Marky"];
var concatenated = concat(names);
document.write(concatenated);