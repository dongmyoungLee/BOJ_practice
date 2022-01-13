const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let arrayNumber = []

for (let i = 0; i < input.length; i++) {
    arrayNumber.push(Number(input[i]))
}
let a = Math.max(...arrayNumber)
console.log(a)
console.log(arrayNumber.indexOf(a)+1)