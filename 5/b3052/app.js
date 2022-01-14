const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = []
let count = 0

for (let i = 0; i < input.length; i++) {
    result.push(input[i] % 42)
}

const uniqArr = result.filter((el, idx) => {
    return result.indexOf(el) === idx
})

console.log(uniqArr.length)

