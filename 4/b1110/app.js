const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin'
: './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


let realInput = input[0]
input = input[0]
let inputPieceNum = ''
let sum = 0
let count = 0
let condition = true

while (condition) {
    inputPieceNum = input.split('').map(x => Number(x))
    console.log(inputPieceNum)
    sum = inputPieceNum[0] + inputPieceNum[1]
    if (sum > 9) {
        sum = sum % 10
    } else {
        
    }
    input = String(inputPieceNum[1]) + String(sum)
    count++
    if(input === realInput) {
        condition = false
    }
}
console.log(count)

