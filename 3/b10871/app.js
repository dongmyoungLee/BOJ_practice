const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');


let count = input[0].split(' ')
let num = input[1].split(' ')
let result = ''

for (i = 0; i < count[0]; i++) {
    if(Number(num[i]) < Number(count[1])) {
        result += `${num[i]} `
    }
}

console.log(result)

