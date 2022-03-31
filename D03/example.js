let a = 7;
let b =6;
// greater than
console.log(a > b);
// greater than or equal to
console.log (a >=b);
// less than or equal to
console.log (a < b);
// les than or equal to
console.log(a<=b);
// identical (strict equality)
console.log(a === b);

// conditional statements -- you can be able to execute a certain block of code based on a condition (if)

// if(condition){
    // this block of code will only run if the condition is truthy

// alerts if x is less than y
// let x = 40;
// let y= 20;
// if (x < y){
//     alert("Red");

// }else {
//     alert("Black");
// }

// let username = "Kinyanjui";
// let password ="abcd123";
// let usernameInput = prompt("Kindly enter your username");

// // for username check ;
// if(usernameInput == username) {
//     alert("Username correct Please enter your password");
//     let passwordInput = prompt ("Enter Your password")

//     if(passwordInput == password) {
//         alert("Karibu huku kwetu");
//     } else {
//         alert("Wrong password kindly Try again");
//     }
// }else{
//     alert("Wrong username kindly Try again");
// }

// code for age 

// let userAge = prompt("What is Your Age");

// if(userAge >=18){
//     alert("adult");
// }else{
//     alert("kindly use the kids channel");
// }
// if age is below 18 - child
// 18 upto 35- youth 
// 35 and above -too old

// if(userAge <18){
//     console.log("child");

// }else if (userAge <= 35){
//     console.log("youth");

// }else {
//     console.log("adult");
// }

// assignment
//Write a JavaScript program that accept two integers and display the larger.

let x =30;
let y = 40;

if (y> x){
    alert("Larger");
}else{
    alert ("Intergrs");2
}
// good credit score
// good credit score above 6-10
// bad credit score 1-5
// pending 5
// income
// high income >=50,000
// low income <50,000
// criminal record  yes or no
 
let User = prompt ("Enter Your FullName");
let Age = prompt ("What is your Age");

if(Age < 18){
    console.log("Not Eligible");
}else if(Age >= 18){
    console.log("Eligible to Apply");
}
let Income = prompt ("Enter Your Income");
if(Income < 50000){
    console.log("Sorry You Don't Qualify For a Loan RIght Now");
}else if (Age => 50000){
    console.log("You Qualify For a loan");
}
let Purpose= prompt("What is the Purpose For Your Loan")

let creditScore = 5;
if(creditScore < 5){
    console.log("Sorry you have a low Credit Score");
}else if ( creditScore{
    console.log("You Qualify For a loan");
}
let CriminalRecord = No;
if(CriminalRecord = Yes){
    console.log("Sorry you  don't qualify");
}else if (CriminalRecord= No){
    console.log("You Qualify For a loan");
}
