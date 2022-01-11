const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let count = input[0];
let numbers = [];
let num = 1

for (let i = 1; i < input.length; i++) {
    if (input[i] !== '') {
        numbers.push(input[i].split(' '));
    }
}
for (let i = 0; i < numbers.length; i++){
    let num1 = Number(numbers[i][0]);
    let num2 = Number(numbers[i][1]);
    console.log(`Case #${num + i}: ${num1} + ${num2} = ${num1 + num2}`)
}


