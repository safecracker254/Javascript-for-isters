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

// function addTwo(a,b){
//        console.log(a+b)
//      };
// const addTwo =(a, b) => console.log (a + b);


// Personal Notes on arrow functions
// Simole way to declare arrow functions
//  let func = (arg1,arg2,......,argN) => expression;
// tit creates a function func that accepts arguments arg1...argN on the right side with their use and returns its results

// let sum =(a, b) => a + b ;
// the arrow function is a shorter form of:
// let sum = function(a, b){
  // return a + b;
  // };
// alert ( sum(1, 2));  // 3

// let double = n => n * 2;
// // its the same as let double = function (n){return n * 2}
// alert(double(3));  // 6 

// if there are no arguments parantheses are empy,but they must be present
// let sayHi =   () => alert("Hello there Welcome to Javascript!");

// sayHi();
// arrow functions can be used in the same way as FUnction Expressions
// For instance to dynamicallly create a function
// example of a singke arrow function
// let age = prompt("What is Your Age?" , );
// let welcome = (age < 18 ) ?
// () => alert('Hello') :
// () => alert("Greetings!");

// welcome();

// Multiline arrow functions
// example of a multiline arrow function
// let sum = (a, b) => { // the curly braces opens a multiline function
// let result = a + b ;
// return result;
// };

// alert(sum(1, 2) ); //3
let ask =prompt("Do you know Javascript?" );{
let   yes  =  alert('Welcome to Javascript');
 let  no   = alert("We will let you know");

};

// let  ask = prompt("Do you know Javascript", yes, no){
//   if(confirm(question)) yes() ;
//   else no ();
// }
// ask (
//   () => alert ("Welcome To Javascript"),
//   () => alert ('We will let You know')
// )
