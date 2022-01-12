const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin'
: './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = Number(input);
let cycle = 0;
let temp = num;
let step = 0;
let condition = true;

while (condition) {
    cycle++;

    if (temp < 10) {
        step = temp % 10;
    } else {
        step = Math.floor(temp / 10) + (temp % 10);
    }
    temp = (temp % 10).toString() + (step % 10).toString();
    temp = Number(temp);

    if (temp === num) {
        condition = false;
    } 
}

console.log(cycle);