// deep dive into functions

// defining /declaring functions
// function showMessage(){
//     alert("Hello Everyone!");
// }

// call the function(execute a function)
// showMessage();

// Scope /there are two types
// local and global

// let age =  78; 
// age is a global variable

// function displayAge(){
//     // age is from a global scope
//     alert(age);

//     let age = 46;
//     alert(age);
// }
// displayAge();

// TO DO SCOPE AND CLOSURE

// PARAMETRS AND ARGUMENTS
// function sayHi(){
//     alert("Hello Boniface")
// }
// sayHi
// function sayHi2(){
//     alert("Hello Kelvin")
// }
// sayHi2

// function sayHi(name){
// alert('Hello there ${name}')
// }
// sayHi("Boniface"); 
// // Boniface is an argument
// sayHi("Sharon"); 

// function addTwo(a,b){
//     console.log(a+b)
// }
// addTwo(7, 12);
// addTwo(27, 14);
// addTwo(70, 10);

// return statement
// function add (x, y){
//     // here return gives the result of running this function
//     return x + y;

// }
// let sum1 = add (10, 67);
// // this stores the result of runnung the function add
// let sum2 = add(18, 167);

// console.log(sum1);
// console.log(sum2);

// let sum3 = add(sum1, sum2);
// console.log(sum3);


// function checkAge(age){
//     if (age >18){
//         return true ;
//     }else {
//         return false
//     }
// };
// // function expressions
// const checkAge2 = function (age){
//     if(age > 18){
//         return true;
//     }else {
//         return false;
//     }
// };

// arrow function == shorter syntax of writing functions

function addTwo(a,b){
       console.log(a+b)
     };
const addTwo =(a, b) => console.log (a + b);
