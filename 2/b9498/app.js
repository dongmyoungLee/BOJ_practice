const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin'
: './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);


solution(input[0], input[1]);


function solution(A, B) {    
    if (A >= 90 && A <= 100) {
        console.log('A')
    } else if (A >= 80 && A < 90) {
        console.log('B')
    } else if (A >= 70 && A < 80) {
        console.log('C')
    } else if (A >= 60 && A < 70) {
        console.log('D')
    } else {
        console.log('F')
    }
}