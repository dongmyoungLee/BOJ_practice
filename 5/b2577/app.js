const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let arrayNumber = []

for (let i = 0; i < input.length; i++) {
    arrayNumber.push(Number(input[i]))
}

let testNumber = (arrayNumber[0] * arrayNumber[1] * arrayNumber[2]).toString().split('').map(Number)

for (let j = 0; j < 10; j++) {
    console.log(testNumber.filter(n => n === j).length)
}
