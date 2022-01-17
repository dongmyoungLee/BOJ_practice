const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin'
: './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = Number(input);
let cycle = 0;
let temp = num;
let step = 0;
let condition = true;

while (condition) {
    cycle++;

    if (temp < 10) {
        step = temp % 10;
    } else {
        step = Math.floor(temp / 10) + (temp % 10);
    }
    temp = (temp % 10).toString() + (step % 10).toString();
    temp = Number(temp);

    if (temp === num) {
        condition = false;
    } 
}

console.log(cycle);

/*

조건은 다 맞췄는데
백준 채점기에 시간초과가 뜬다..
왜 그러는지 모르겠음.

<밑의 코드는 채점 잘되는 코드>
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(+input[0]);
function solution(N) {
    let makeNum = N;
    let ans = 0;
    while (makeNum !== N || ans === 0) {
        let ten;
        let one;
        if (makeNum >= 10) {
            ten = +String(makeNum)[0];
            one = +String(makeNum)[1];
        } else {
            ten = 0;
            one = +String(makeNum)[0];
        }
        makeNum = ten + one;
        let makeNumOne;
        if (makeNum >= 10) {
            makeNumOne = +String(makeNum)[1];
        } else {
            makeNumOne = +String(makeNum)[0];
        }
        makeNum = +(String(one) + String(makeNumOne));
        ans++;
    }
    console.log(ans);
}