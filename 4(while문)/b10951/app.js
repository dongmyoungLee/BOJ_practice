const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let n = 0
let sum = ''

while (n < input.length-1) {
    let num = input[n].split(' ').map(x => parseInt(x))
    sum += `${num[0] + num[1]}\n`
    n++
}
console.log(sum)

/*

while 조건을 n < input.length 으로 하면 출력이 제대로 나오는데 채점기에선 오류가 나고

n < input.length-1 을 해주면 정답이다..

왠지 모르겠음..

*/