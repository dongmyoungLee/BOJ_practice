const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let result = ''

for(i = 1; i <= input[0]; i++) {
    tmp = input[i].split(' ')
    result += parseInt(tmp[0]) + parseInt(tmp[1]) + "\n"
}

// console.log 를 매번출력하니 시간이 오래걸림
// 변수에 값을 누적해주고 개행을 추가해주니 1370ms 나옴.

console.log(result)
