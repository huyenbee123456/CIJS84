//Arrow function
//const/let/var tênFunction = (parameter 1, parameter 2,... para n) =>{
    //code block}

// const sum = (x,y) => x + y;

// console.log (sum (2,6))
// const square = (z) => {
//     return z*z
// }
// console.log (square(6))

//Arrow function k có hoisting
//Arrow function k có context


//template literal - công dụng : in ra nhiều dòng, có thể viết y như kết quả muốn in ra; truyền trực tiếp biến vào chuỗi
// const str = "Mindx" + "\nHọc ở Thành Công";
// console.log (str)
// const str = `Mindx 
// Học ở Thành Công`;
// console.log (str)
// const maLop = 'CIJS84'
// const diaChi = 'Thành Công'
// // const str = 'MindX' + maLop + ' học ở ' + diaChir
// const str = `MindX ${maLop}
// Học ở ${diaChi}`
// console.log (str)

//Spread và Rest Operator
//Sao chép array, object
// const num1 = [1,3,4,5]
// const num2 = [...num1];
// num2[2] = 33;
// console.log (num1)
// console.log (num2)

//gộp array, object - object có cơ chế bị ghi đè nếu cùng key
// const nameAndAge = {name: 'A', age: '18'};
// const gpa = {gpa: '3.8'};
// const student =  {
//     ... nameAndAge,
//     ... gpa
// }
// console.log (student)

// const student1 = {name: 'Nguyễn Văn A', age: 18, gpa: 3.9};
// const student2 = {name: 'Nguyễn Thị B', age: 20};
// const student3 = {...student2, ...student1};
// console.log (student3)

// //thêm phần tử vào array, thêm key vào object
// const arr1 = [1,2,3];
// const arr2 = [1,2,3];
// const arr3 = [...arr1,...arr2, 4, 5, 6]
// console.log (arr3);

//tính tổng các số đc truyền vào
//input: 1,2,3  output: 6
//input: 1,2,3,4,5   output:15

// const sumListNumber = (...listNumber) => {
//     let sum = 0;
//     for (let i = 0; i <listNumber.length; i++) {
//         sum = sum + listNumber [i]
//     }
//     return sum;
// }
// console.log (sumListNumber (1,2,3))


//destructuring trong object
// const teacher = {
//     name: 'Trần Thị B',
//     gender: 'girl',
//     age: 30
// };
// // const nameTeacher = teacher.name;
// // const gender = teacher.gender;
// const {gender, name: nameTeacher, age = 0} = teacher; //khi đổi tên biến thì tên cũ k dùng đc
// console.log (nameTeacher)
// console.log (age)

// //destructuring trong arry
// const listNumber = [1,2,3]
// const [number,... numbers] = listNumber;
// // console.log (number1)
// console.log (numbers)

//Array function: map, filter, findIndex, find...
//cho 1 mảng A có các phần tử là số, viết code trả về mảng mới có giá trị là các phần tử trong mảng A*2
//VB: Input A = [1,2,3] => mảng mới: new Arr=[2,4,6]
//cách 1 thông thường
// function double (A) {
//     let newArr = [];
//     for (let i = 0; i < A.length; i++) {
//         newArr.push(A[i] * 2)
//     }
//     return newArr
// }
// console.log (double([1,2,3]))

//cách 2 hàm map
// const A = [1,2,3,4,5]
// const newArr = A.map ((value, index) => {
//     // console.log (value);
//     // console.log ('index: ', i);
//     return value*2
// })
// console.log (newArr)

// Bài 2: Cho một mảng B, viết code trả về mảng mới chứa các
// phần tử là số lẻ trong mảng B
// Input: B = [1,2,3,4,5]
// Output: newArr = [1,3,5]

// const B = [1,2,3,4,5]
// const newArr = B.filter((value) => value % 2 ===1);
// // console.log (newArr)

// const index = newArr.findIndex ((value => value >3))
// console.log (index);

//module
