const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin'
: './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);


solution(input[0], input[1]);


function solution(A, B) {
    let result = ''
    for (i = 0; i < A; i++) {
        for (j = 0; j < A - i - 1; j++) {
            result += ' '
        }

        for (k = 0; k <= i; k++) {
            result += '*'
        }

        result += '\n'
    }
    console.log(result)
}