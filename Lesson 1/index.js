//let và const

// var/let và const
// let a = 10;
// console.log (a);
// a = 20;
// console.log (a);

// var/let dùng để khởi tạo những biến mà có thể thay đổi giá trị
//const dùng để khởi tạo những biến hằng số


//var và let/const
// function get (){
//     var a = 10;
//     console.log (a);
// }
// get ();
// console.log (a);
//biến được khởi tạo = từ khóa let hoặc const thì chỉ có phạm vi sử dụng trong scope {}
// biến được khởi tạo = từ khóa var thì sẽ có phạm vi global scope, nếu var trong function thì k dùng đc


//hoisting - var có cơ chế hoisting
// a = 10;
// console.log (a);
// var a;
// console.log (a);

//let và const k có cơ chế hoisting

//2. Arrow function
// function sum (a,b ) {
//     console.log ('sum 2 numbers');
//     return (a+b);
// }
// console.log (sum(3,5));
//arrow function - no hoisting, no context
// const sum = (a,b) => {
//     console.log ('sum 2 numbers');
//     return a+b;
// }
// console.log (sum(3,5));

//let/const/var tênFunction = (parameters) => {đoạn code thực thi} 
// const sum = (a,b) => a+b

// 1. F
// 2. T
// 3. T 
// 4. 3 //set trong object (nếu có key là .bar thì set thêm giá trị cho object)
// 5. 4
//6. 1
//7. 4 // báo lỗi do array = const
//8. 2
//9. 1 //spread của từng mảng từ trong ra ngoài
//10. 2 
//11. 3
//12. 1
//13. 4 //filer, map trả về array



//3. destructuring
// const date = {
//     d: 5, m:7, y:2023,
// }

// const {d,m,y =2023} =date;
// console.log (d);
// console.log (m);
// console.log (y);
