const { assert } = require('console');
const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin'
: './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);


solution(input[0], input[1]);


function solution(A, B) {
    let result = ''
    for(i = 1; i <= A; i++) {
        result += i + '\n'
        
    }
    console.log(result)
}