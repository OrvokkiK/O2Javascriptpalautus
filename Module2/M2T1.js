'use strict';
let nums = [];
for (let i = 0; i < 5; i++) {
    let luku = parseInt(prompt('State a number:'));
    nums.push(luku);
}

console.log(nums);

for (let n = 4; n >= 0; n--) {
    console.log(nums[n]);
}
