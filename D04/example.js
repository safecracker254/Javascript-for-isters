// let role = prompt("user role");

// if(role == "admin"){
//     console.log(101);

// }else if (role == "student"){
//     console.log(301);
// }else if(role == "trainer"){
//     console.log(406);

// }else if (role == "faculty"){
//     console.log(109);
// }else{
//     console.log(0);
// }

// switch statement

// switch (role) {
//     case "admin":
//         console.log(101);
//         break;
//     case "student":
//          console.log(101);
//          break;
//     case "trainer":
//          console.log(101);
//          break;
//     case "facaulty":
//         console.log(101);
//           break;  
//     default:
//         console.log(0);
// }

// logical operators
// and operator (&&) --evaluates to true if all statements to true.
// if any of the statements is false the whole equation is false.

// let age = 15 ;

// if (age > 18 && age <=35){
//     console.log("PASS");

// }
// let username ="Kinyanjui";
// let password ="123abcd";
// let usernameInput = prompt("Enter Your Username");
// let passwordInput = prompt("Enter Your Password");

// if (usernameInput === username && passwordInput === password){
//     alert(  "Authenticated" );
// }else {
//     alert("Something went wrong Please try again");
// }

// or operator (||)
// evaluates to true if any of the statements is true,if all statements are false it will evaluate to false.


// age= 15;
// let hasParentalPermision = true;
// if(age > 18 || hasParentalPermision){
//     alert("You are allowed");

// }else{
//     alert("Seek parental permision");
// }

let hasGoodCreditScore = true;
let hasCriminalRecord = false;
let hasHighIncome = true;
//1
if (hasGoodCreditScore && !hasCriminalRecord) {
	console.log("Elligible for a loan");
} else {
	console.log("NOT Elligible for a loan");
}

//1
if (hasGoodCreditScore && hasHighIncome) {
	console.log("Elligible for a loan");
} else {
	console.log("NOT Elligible for a loan");
}

//3
if (hasGoodCreditScore || hasHighIncome) {
	console.log("Elligible for a loan");
} else {
	console.log("NOT Elligible for a loan");
}