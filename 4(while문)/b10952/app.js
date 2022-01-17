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

/*

comment 

입력값 0과 0을 만나면 반복문에서 탈출시켜주는 조건을 정확히 썻어야했음.

*/


