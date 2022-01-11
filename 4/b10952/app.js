const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
let arrayNum = []
let condition = true
let n = 0

while (condition) {
    arrayNum.push(input[n].split(' '))
    let sum = Number(arrayNum[n][0]) + Number(arrayNum[n][1]) 
    if (sum === 0) {
        condition = false
    } else {
        console.log(sum)
        n++
    }
    
}


