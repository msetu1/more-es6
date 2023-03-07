const numbers = [123, 45, 78, 98, 94, 76, 11, 33, 55, 8, 9, 20];
const smallestNum = numbers.filter(x => x < 20);
const biggestNum = numbers.filter(x => x > 40);
const evenNum = numbers.filter(x => x % 2 === 0);
const oddNum = numbers.filter(x => x % 2 === 1);
console.log(oddNum);

const number = [123, 45, 78, 98, 94, 76, 11, 33, 55, 8, 9, 20];
const num = number.find(x => x < 40);
console.log(num);