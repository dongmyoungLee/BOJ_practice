const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let testCase = Number(input[0])
let number = input[1].split(' ').map(Number)
let maxNumber = Math.max.apply(null, number)
let result = 0

for (let i = 0; i < testCase; i++) {
    result += (number[i] / maxNumber) * 100
}
console.log(result / testCase)



