// ================================ Zadacha #1 ===========================
// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }
// };
// Что выведет консоль и почему?

// ANSWER: Ошибка. Потому что в пятой строке забыли закрывающую скобку setTimeout().
// Шучу ). На консоль появился номер 10. Потому setTimeout(), несмотря что у него нету
// аргумента времени, выполняется последним. Так как он находится внутри цикла.


// ================================ Zadacha #2 ===========================

// ======= 2.1
// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output :
// Today is : Friday. 
// Current time is : 4 PM : 50 : 22

// ANSWER:
console.log("Zadacha #2.1");
var today = new Date();

var day = ""
switch(today.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}

var hours = today.getHours() > 11
    ? hours = (today.getHours() - 12) + " PM"
    : hours = (today.getHours() - 12) + " AM"

var time = hours + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log("Today is :", day); 
console.log("Current time is :", time);

// ========= 2.2
// Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223

// ANSWER:
console.log("Zadacha #2.2");
function reverseNum(num) {
    num = num.toString();
    var revNum = "";
    for(var l in num) {
        revNum += num[num.length - 1 - l];
    }
    return revNum;
}
console.log(reverseNum(32243));

// ========= 2.3
// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n. 
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

// ANSWER:
console.log("Zadacha #2.3");
function factorial(n) {
    if(n == 1) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}
console.log(factorial(5));

// ========= 2.4
// Write a JavaScript program that accept two integers and display the larger.
// ANSWER:
console.log("Zadacha #2.4");
var num1 = 10, num2 = 20;
// with HTML document OR in chrome console will work
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");

if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }

// ========= 2.5
// Write a simple JavaScript program to join all elements of the following array into a string. 
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output : 
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// ANSWER:
console.log("Zadacha #2.5");
var myColor = ["Red", "Green", "White", "Black"];
var myColorStrComma = "";
var myColorStrPlus = "";
for(let i=0; i<myColor.length; i++) {
    if(i !== myColor.length - 1) {
        myColorStrComma += myColor[i] + ",";
        myColorStrPlus += myColor[i] + "+";
    }
    else {
        myColorStrComma += myColor[i];
        myColorStrPlus += myColor[i];
    }
}
console.log(myColorStrComma);
console.log(myColorStrPlus);

// ========== 2.6
// Write a JavaScript function to get the month name from a particular date. 
// Test Data :
// console.log(month_name(new Date("10/11/2009"))); 
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October" 
// "November"

//ANSWER:
console.log("Zadacha #2.6");
function month_name(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()]
}
console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));

// =========== 2.7
// Write a JavaScript program to test the first character of a string is uppercase or not

// ANSWER:
console.log("Zadacha #2.7");
var newStr = "Hello";
function checkFirstChar(str) {
    return str[0] === str[0].toUpperCase() ? "Uppercase" : "Not"
}
console.log(checkFirstChar(newStr));

// =========== 2.8
// Write a JavaScript program to draw a smile
// in file "practicalTasks #2.8.html"