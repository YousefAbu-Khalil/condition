// 1- Write a program to declare two numbers. If both numbers are greater than 10,
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".

var num1 = 5;
var num2 = 6;

if (num1 + num2 > 10) {
  greeting = "Both numbers are greater than 10";
} else {
  greeting = "At least one number is not greater than 10";
}
document.getElementById("demo").innerHTML = greeting;

// 2- Write a program to declare a username and a password.
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".

var username = "yousefmustafa";
var password = 34567;
var x = parseInt(prompt("Enter a number for x:"));
var y = parseInt(prompt("Enter a number for y:"));
if (x === username && password === y) {
  greeting = "Access granted";
} else {
  greeting = "Access denied";
}
document.getElementById("demo").innerHTML = greeting;

// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".

var x = parseInt(prompt("Enter a number for x:"));
if (x > 10 && x < 20) {
  greeting = "The number is between 10 and 20";
} else {
  greeting = "The number is not between 10 and 20";
}
document.getElementById("demo").innerHTML = greeting;

// 4- Write a program that to declare age and whether they have a driver's license (yes or no).
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".

var x = parseInt(prompt("Enter a age for x:"));
if (x >= 18) {
  greeting = "You can drive";
} else {
  greeting = "You cannot drive";
}
document.getElementById("demo").innerHTML = greeting;

// 5- Write a program to declare a number.
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".

var x = parseInt(prompt("Enter a number for x:"));
if (x > 10 || x < 0) {
  greeting = "Invalid number";
} else {
  greeting = "Valid number";
}
document.getElementById("demo").innerHTML = greeting;

// 6- Write a programto declare a number.
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid".
//Otherwise, print "The number is not valid".

var x = parseInt(prompt("Enter a age for x:"));
if ((x > 5 && x < 10) || (x > 20 && x < 25)) {
  greeting = "The number is valid";
} else {
  greeting = "The number is not valid";
}
document.getElementById("demo").innerHTML = greeting;

// 7- to declare a password. If the password is "secret" or "password", print "Access granted".
//Otherwise, print "Access denied".

var x = parseInt(prompt("Enter a password for x:"));
var password = "123__321";
if (x == password) {
  greeting = "Access granted";
} else {
  greeting = "Access denied";
}
document.getElementById("demo").innerHTML = greeting;

// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even,
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".

var x = parseInt(prompt("Enter a number for x:"));
if (x > 0 && x < 100 && x % 2 == 0) {
  greeting = "The number is even and between 0 and 100";
} else {
  greeting = "The number is not even and/or not between 0 and 100";
}
document.getElementById("demo").innerHTML = greeting;

// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative".
//Otherwise, print "Both numbers are positive".

var x = parseInt(prompt("Enter a number for x:"));
var y = parseInt(prompt("Enter a number for y:"));
if (x < 0 || y < 0) {
  greeting = "At least one number is negative";
} else {
  greeting = "Both numbers are positive";
}
document.getElementById("demo").innerHTML = greeting;

// 10- Write a program to declare age and whether they are a student (yes or no).
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".

var x = parseInt(prompt("Enter a age for x:"));
var y = parseInt(prompt("Enter a student yes or no  for x:"));
var z;
if (y === "yes") {
  z = true;
} else {
  z = false;
}
if (x <= 18 || z) {
  greeting = "discount";
} else {
  greeting = "You do not qualify for a discount";
}
document.getElementById("demo").innerHTML = greeting;
