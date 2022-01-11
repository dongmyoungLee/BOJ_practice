const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin'
: './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);


solution(input[0], input[1]);


function solution(A, B) {
    const todayHour = 24
    const todayMinute = 60

    const target = (60 * A) + (B)

    const targetHour = Math.floor(target / 60)
    const targetMinute = target % 60
    
    const miniteModifyToday = target - 45
    let modifyItem = Math.floor(miniteModifyToday / 60)
    let modifyItem2 = miniteModifyToday % 60

    if (modifyItem < 0) {
        modifyItem = todayHour + modifyItem
    } 
    if (modifyItem2 < 0) {
        modifyItem2 = todayMinute + modifyItem2
    } 

    console.log(modifyItem, modifyItem2)   
}