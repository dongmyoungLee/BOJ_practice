const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin'
: './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);


solution(input[0], input[1]);


function solution(A, B) {
    let TargetB1 = String(B).substring(0,1)
    let TargetB2 = String(B).substring(2,1)
    let TargetB3 = String(B).substring(3,2)
    
    TargetB1 = Number(TargetB1)
    TargetB2 = Number(TargetB2)
    TargetB3 = Number(TargetB3)

    const three = (A * TargetB3)
    const four = (A * TargetB2)
    const five = (A * TargetB1)
    const sum = (A * B)

    console.log(three)
    console.log(four)
    console.log(five)
    console.log(sum)
}