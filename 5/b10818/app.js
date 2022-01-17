const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

const testCase = Number(input[0])
const arrayData = input[1].split(' ').map(Number)
const arrayDataSort = arrayData.sort((a, b) => a - b)
console.log(arrayDataSort[0], arrayDataSort[testCase-1])
