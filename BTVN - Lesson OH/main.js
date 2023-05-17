//BT1

const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];
const newArr = arr1.filter((num) => arr2.includes(num));
console.log(newArr);

//BT2
const arr3 = [1, 54, 6, 7];
const newArr2 = arr3.map((num) => num + 5);
console.log(newArr2);

//BT3
const m = [1, 2, 4, 5, 6, 7];
const n = [3, 5, 675, 8, 96];
const filterValue = [1, 8, 10, 96, 7];

const filteredArray = [...m, ...n].reduce((arr, num) => {
  if (!filterValue.includes(num)) {
    arr.push(num);
  }
  return arr;
}, []);

console.log(filteredArray);

//BT4
const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
  ];
  
  const playersNew = players.reduce((obj, player) => {
    obj[player.id] = player;
    return obj;
  }, {});
  
  console.log(playersNew); 

  //BT5
  import { average, sortDescending, positiveNumbers, oddNumbers, secondBiggestNum, countSquareNumbers } from './helpers.js';

  const A = [1, 5, 3, 8, 10];
  
  const averageRun = average(A);
  console.log(averageRun); 
  
  const sortDescendingRun = sortDescending(A);
  console.log(sortDescendingRun); 

  const positiveNumbersRun = positiveNumbers(A);
  console.log(positiveNumbersRun);

  const sumOfOddNumbers = oddNumbers(A);
  console.log(sumOfOddNumbers);
  
  const secondBiggestNumRun = secondBiggestNum(A);
  console.log(secondBiggestNumRun); 
  const squareNumbersCount = countSquareNumbers(A);
  console.log(squareNumbersCount); 
  
  