const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin'
: './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = input;
let sum;
let i = 0;

while (true) {
    sum = Math.floor(num / 10) + num % 10
    num = (num % 10) * 10 + sum % 10
    i++
    if (Number(input) === num) {
        break
    }
    
}

console.log(i)
