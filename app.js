// Chapter 1 (ALERT)

// =========== Ques 1

// alert("Hello, " + "Arsalan Sohail.");

// alert("Error! Please enter a valid password.");

// =========== Ques 2

// alert("Error! Please enter a valid password.");

// =========== Ques 3

// alert("Welcome to JS Land...\nHappy Coding!");

// Skip Remaining Questions

// Chapter 2 (VARIABLES FOR STRINGS)

// =========== Ques 1

// var username;

// =========== Ques 2

// var myName = "Arsalan Sohail"

// =========== Ques 3

// var message;
// message = "Hello World";
// alert(message);

// =========== Ques 4

// var studentName = "Jhone Deo";
// var studentAge = "15 years old";
// var studentCertification = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCertification);

// =========== Ques 5

// var message = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(message);

// =========== Ques 6

// var email = "arsalan.sohail1934@gmail.com";
// alert("My email address is " + email);

// =========== Ques 7

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// =========== Ques 8

// var display = "Yah! I can write HTML content through JavaScript";
// document.write(display);

// =========== Ques 9

// var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(str);

// Chapter 3 (VARIABLES FOR NUMBERS)

// =========== Ques 1

// var age = 17;
// alert("I am " + age + " " + "years old");

// =========== Ques 2

// var visitCount = 17;
// alert(`You have visited this site ${visitCount} times`);

// =========== Ques 3

// var birthYear = 2005;
// var birthYearType = typeof birthYear;

// document.write("My birth year is " + birthYear + "<br />");
// document.write("Data type of my declared variable is " + birthYearType);

// =========== Ques 4

// var visitorName = "John Deo";
// var productTitle = "Shirt";
// var quantity = 5;
// alert(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing Store");

// Chapter 4 (VARIABLE NAMES: LEGAL & ILLEGAL)

// =========== Ques 1

// var firstVaribale, secondVariable, thirdVariable;

// =========== Ques 2

// Legal
// var abc, $abc, _abc, abc1, newVar;

// Illega;
// var !abc, 1abc, .abc, var, my variable;

// =========== Ques 3

// document.write("<h3>Rules for naming JS variables</h3>");
// document.write("Variable names can only contain <b>numbers</b>, <b>$</b> and <b>_</b>. <br />")
// document.write("Variable must begin with a <b>$abc</b>, <b>_abc</b> and <b>abc</b>. <br />")
// document.write("Variables names are <b>case sensitive</b><br />")
// document.write("Variables names should not be <b>JS keywords</b><br />")

// Chapter 5 (MATH EXPRESSIONS)

// =========== Ques 1

// var firstNum = 5;
// var secondNum = 3;
// var total = firstNum + secondNum;
// document.write("The sum of " + firstNum + " + " + secondNum + " is " + total);

// =========== Ques 2

// Subtraction

// var firstNum = 5;
// var secondNum = 3;
// var total = firstNum - secondNum;
// document.write("The sum of " + firstNum + " - " + secondNum + " is " + total);

// Multiplication

// var firstNum = 5;
// var secondNum = 3;
// var total = firstNum * secondNum;
// document.write("The sum of " + firstNum + " * " + secondNum + " is " + total);

// Division

// var firstNum = 5;
// var secondNum = 3;
// var total = firstNum / secondNum;
// document.write("The sum of " + firstNum + " / " + secondNum + " is " + total);

// =========== Ques 3

// var number = 5;
// document.write(`<p>the initial value is: ${number}</p>`);
// number++;
// document.write(`<p>the incremented value is: ${number}</p>`);
// number = number + 7;
// document.write(`<p>value after addition  is: ${number}</p>`);
// number--;
// document.write(`<p>value after decrement is: ${number}</p>`);
// number = number % 3;
// document.write(`<p>the remainder is: ${number}</p>`);

// =========== Ques 4

// var cost = 600;
// cost = cost * 5;
// document.write(`<p> total cost to buy 5 tickets to a movie is: ${cost}</p>`);

// =========== Ques 5

// var table = 4;
// document.write(`<p>${table} x 1 = ${table * 1}</p>`);
// document.write(`<p>${table} x 2 = ${table * 2}</p>`);
// document.write(`<p>${table} x 3 = ${table * 3}</p>`);
// document.write(`<p>${table} x 4 = ${table * 4}</p>`);
// document.write(`<p>${table} x 5 = ${table * 5}</p>`);
// document.write(`<p>${table} x 6 = ${table * 6}</p>`);
// document.write(`<p>${table} x 7 = ${table * 7}</p>`);
// document.write(`<p>${table} x 8 = ${table * 8}</p>`);
// document.write(`<p>${table} x 9 = ${table * 9}</p>`);
// document.write(`<p>${table} x 10 = ${table * 10}</p>`);

// =========== Ques 6

// var celcius = 25;
// var farenhiet = 70;
// var convertToF = (((celcius * 9) / 5) + 32);
// var convertToC = ((farenhiet - 32) * (5 / 9));
// document.write(`<p> ${celcius}℃ is ${convertToF}℉</p>`);
// document.write(`<p> ${farenhiet}℉ is ${convertToC}℃</p>`);

// =========== Ques 7

// var p1 = 650;
// var p2 = 100;
// var q1 = 3;
// var q2 = 7;
// var sc = 100;
// document.write(`total cost of your order is ${(p1 * q1) + (p2 * q2) + sc}`);

// =========== Ques 8

// var total_marks = 980;
// var obtained_marks = 804;
// document.write(`<p>Total marks: ${total_marks}\n
// Marks obtained: ${obtained_marks}\n
// Percentage: ${(obtained_marks / total_marks) * 100}%</p>`);

// =========== Ques 9

// var usdollars = 10;
// var saudiRayal = 25
// document.write(`<p>total currency in PKR: ${(10 * 104.80) + (25 * 28)}</p>`);

// =========== Ques 10

// var number = 10;
// var result = ((number + 5) * 10) / 2;
// console.log(result);

// =========== Ques 11

// var currentYear = 2023;
// var birthYearr = 2000;
// document.write(`<p>they are either ${currentYear - birthYear} old</p>`);

// =========== Ques 12

// var radius = 5;
// var circumference = 2 * 3.142 * radius;
// document.write(`<p>circumference of a circle is: ${circumference}</p>`);
// document.write(`<p>area of the circle is: ${3.142 * (radius ** 2)}</p>`);

// =========== Ques 13 Skip

// Chapter 6 - 9 (MATH EXPRESSIONS)

// =========== Ques 1

// var a = 10;
// document.write(`<p>the value of a is: ${a}</p>`);
// ++a;
// document.write(`<p>the value of ++a is: ${a}</p>`);
// a++;
// document.write(`<p>the value of a++ is: ${a}</p>`);
// --a;
// document.write(`<p>the value of --a is: ${a}</p>`);
// a--;
// document.write(`<p>the value of a-- is: ${a}</p>`);

// =========== Ques 2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write(`<p>result is:  ${result}</p>`);

// =========== Ques 3

// var nam = prompt("Enter you name");
// alert(`Hi, ${nam}`);

// =========== Ques 4

// var num = prompt("enter a number", 5);
// document.write(`<p>${num} x 1 = ${num * 1}</p>`);
// document.write(`<p>${num} x 2 = ${num * 2}</p>`);
// document.write(`<p>${num} x 3 = ${num * 3}</p>`);
// document.write(`<p>${num} x 4 = ${num * 4}</p>`);
// document.write(`<p>${num} x 5 = ${num * 5}</p>`);
// document.write(`<p>${num} x 6 = ${num * 6}</p>`);
// document.write(`<p>${num} x 7 = ${num * 7}</p>`);
// document.write(`<p>${num} x 8 = ${num * 8}</p>`);
// document.write(`<p>${num} x 9 = ${num * 9}</p>`);
// document.write(`<p>${num} x 10 = ${num * 10}</p>`);

// =========== Ques 5


// var subj1 = prompt("Enter subject 1");
// var subj2 = prompt("Enter subject 2");
// var subj3 = prompt("Enter subject 3");
// var totalMarks = 100;
// var obtainedMarks1 = Number(prompt("obtained marks for subject 1"));
// var obtainedMarks2 = Number(prompt("obtained marks for subject 2"));
// var obtainedMarks3 = Number(prompt("obtained marks for subject 3"));

// var percentage1 = (obtainedMarks1 / totalMarks) * 100;
// var percentage2 = (obtainedMarks2 / totalMarks) * 100;
// var percentage3 = (obtainedMarks3 / totalMarks) * 100;
// var totalpercentage = ((obtainedMarks1 + obtainedMarks2 + obtainedMarks3) / 300) * 100

// document.write(`<table>
//     <tr>
//         <th>Subject</th>
//         <th>Total Marks</th>
//         <th>Obtained Marks</th>
//         <th>Percentage</th>
//     </tr>
//     <tr>
//         <td> ${subj1}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks1}</td>
//         <td>${percentage1}%</td>
//     </tr>
//     <tr>
//         <td> ${subj2}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks2}</td>
//         <td>${percentage2}%</td>
//     </tr>
//     <tr>
//         <td> ${subj3}</td>
//         <td>${totalMarks}</td>
//         <td>${obtainedMarks3}</td>
//         <td>${percentage3}%</td>
//     </tr>
//     <tr>
//         <td>Total</td>
//         <td>${totalMarks + totalMarks + totalMarks}</td>
//         <td>${obtainedMarks1 + obtainedMarks2 + obtainedMarks3}</td>
//         <td>${totalpercentage}%</td>
//     </tr>
// </table>`)

// Chapter 9 - 11 (USER INPUT & CONDITIONAL STATEMENT)

// =========== Ques 1

// var city = prompt("enter you city name");
// if (city === "karachi") {
//     alert("welcome to city of lights");
// }

// =========== Ques 2

// var gender = prompt("enter your gender");
// if(gender === "male"){
//     alert("Good morning sir");
// }
// if(gender === "female"){
//     alert("Good morning ma'am");
// }

// =========== Ques 3

// var traffic = prompt("enter color of road traffic signal");
// if (traffic === "red") {
//     document.write(`<table>
//         <tr>
//             <th>Signal Color</th>
//             <th>Message</th>
//         </tr>
//         <tr>
//             <td>${traffic}</td>
//             <td>Must stop</td>
//         </tr>
//      </table>`);
// }
// if (traffic === "yellow") {
//     document.write(`<table>
//         <tr>
//             <th>Signal Color</th>
//             <th>Message</th>
//         </tr>
//         <tr>
//             <td>${traffic}</td>
//             <td>ready to move</td>
//         </tr>
//      </table>`);
// }
// if (traffic === "green") {
//     document.write(`<table>
//         <tr>
//             <th>Signal Color</th>
//             <th>Message</th>
//         </tr>
//         <tr>
//             <td>${traffic}</td>
//             <td>Move now</td>
//         </tr>
//      </table>`);
// }

// =========== Ques 4

// var feul = Number(prompt("enter the feul"));
// if(feul < 0.25){
//     alert("please refill the feul in your car");
// }

// =========== Ques 5

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// =========== Ques 6

// var marks1 = Number(prompt("enter marks 1"));
// var marks2 = Number(prompt("enter marks 2"));
// var marks3 = Number(prompt("enter marks 3"));
// var marksObtained = marks1 + marks2 + marks3
// var totalMarks = 300;
// var percentage = ((marksObtained) / totalMarks) * 100;
// if (percentage >= 80) {
//     document.write(`<h1>MARKSHEET</h1>
//     </br>
//     <p>Total mark: ${totalMarks}</p>
//     <p>Marks Obtained: ${marksObtained}</p>
//     <p>Percentage: ${percentage}</p>
//     <p>Grade: A-one</p>
//     <p>Remarks: Excellent </p>`);
// } else if (percentage >= 70 && percentage < 80) {
//     document.write(`<h1>MARKSHEET</h1>
//     </br>
//     <p>Total mark: ${totalMarks}</p>
//     <p>Marks Obtained: ${marksObtained}</p>
//     <p>Percentage: ${percentage}</p>
//     <p>Grade: A</p>
//     <p>Remarks: Good</p>`);
// } else if (percentage >= 60 && percentage < 70) {
//     document.write(`<h1>MARKSHEET</h1>
//     </br>
//     <p>Total mark: ${totalMarks}</p>
//     <p>Marks Obtained: ${marksObtained}</p>
//     <p>Percentage: ${percentage}</p>
//     <p>Grade: B</p>
//     <p>Remarks: You need to improve</p>`);
// } else {
//     document.write(`<h1>MARKSHEET</h1>
//     </br>
//     <p>Total mark: ${totalMarks}</p>
//     <p>Marks Obtained: ${marksObtained}</p>
//     <p>Percentage: ${percentage}%</p>
//     <p>Grade: fail</p>
//     <p>Remarks: Sorry</p>`);
// }

// =========== Ques 7

// var secretNum = 5;
// var guessNum = Number(prompt("Guess a number", 1 - 10));
// if (guessNum === secretNum) {
//     alert("Bingo! Correct Answer");
// } else if (guessNum + 1 === secretNum) {
//     alert("Close enough to the correct answer");
// }

// =========== Ques 8

// var divisible = Number(prompt("Enter a number to check it is divisible by 3"))
// if (divisible % 3 === 0) {
//     alert("yes it is divisible by 3");
// }
// console.log(divisible % 3 === 0, divisible);

// =========== Ques 9

// var val = Number(prompt("Enter value"));
// if (val % 2 === 0) {
//     alert("The number is " + val + " is even.")
// } else {
//     alert("The number is " + val + " is odd.")
// }

// =========== Ques 10

// var temp = Number(prompt("Enter the temperature"));
// if (temp > 40) {
//     alert("it is too hot outside");
// } else if (temp > 30 && temp < 40) {
//     alert("the weather today is normal");
// } else if (temp > 20 && temp < 30) {
//     alert("todays weather is cool");
// } else {
//     alert("OMG! todays weather is so cool");
// }

// =========== Ques 11

// var firstNum = Number(prompt("enter First number"));
// var secondNum = Number(prompt("enter Second number"));
// var operator = prompt("enter the operator", "+,-,*,/,%");
// if (operator === "*") {
//     alert(firstNum * secondNum);
// } else if (operator === '+') {
//     alert(firstNum + secondNum);
// } else if (operator === "-") {
//     alert(firstNum - secondNum);
// } else if (operator === "/") {
//     alert(firstNum / secondNum);
// } else if (operator === "%") {
//     alert(firstNum % secondNum);
// }

// Chapter 12 - 13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS)

// =========== Ques 1

// var inputChar = prompt("Enter a character:");
// var charCode = inputChar.charCodeAt(0);
// if (charCode >= 48 && charCode <= 57) {
//     alert("The input character is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//     alert("The input character is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//     alert("The input character is a lowercase letter.");
// } else {
//     alert("The input character is not a number, uppercase letter, or lowercase letter.");
// }

// =========== Ques 2

// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));
// if (num1 > num2) {
//     alert("The larger integer is: " + num1);
// }
// else if (num2 > num1) {
//     alert("The larger integer is: " + num2);
// }
// else {
//     alert("Both integers are equal.");
// }

// =========== Ques 3

// var num = parseInt(prompt("Enter a number:"));
// if (num > 0) {
//     alert("The number " + num + " is positive.");
// }
// else if (num < 0) {
//     alert("The number " + num + " is negative.");
// }
// else {
//     alert("The number is zero.");
// }

// =========== Ques 4

// var char = prompt("Enter a character:").toLowerCase();
// if (char.length === 1 && (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')) {
//     alert("The character '" + char + "' is a vowel.");
// }
// else {
//     alert("The character '" + char + "' is not a vowel.");
// }

// =========== Ques 5

// var correctPassword = "mypassword";
// var userPassword = prompt("Enter your password:");
// if (userPassword === null || userPassword === "") {
//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password.");
// }

/* =========== Ques 6 */

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// alert(greeting)

// =========== Ques 7


// var time = parseInt(prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm):"));
// if (isNaN(time)) {
//     alert("Invalid input. Please enter a valid time.");
// } else {
//     var hours = Math.floor(time / 100);
//     alert(hours)
//     if (hours >= 0 && hours < 12) {
//         alert("Good morning!");
//     } else if (hours >= 12 && hours < 17) {
//         alert("Good afternoon!");
//     } else if (hours >= 17 && hours < 20) {
//         alert("Good evening!");
//     } else if (hours >= 20 && hours < 24) {
//         alert("Good night!");
//     } else {
//         alert("Invalid time. Please enter a valid time in 24-hour clock format.");
//     }
// }

// Chapter 14 - 16 (Arrays)

// =========== Ques 1

// var studentNames = [];
// studentNames.push("John");
// studentNames.push("Alice");
// studentNames.unshift("Bob");

// =========== Ques 2

// var studentNames = new Array();
// var studentNames = [];
// studentNames.push("John");
// studentNames.push("Alice");
// studentNames.unshift("Bob");

// =========== Ques 3

// var arr = ["abc", "def", "ghi", "jkl"];

// =========== Ques 4

// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]);
// console.log(numbers[2]);
// numbers[1] = 10;
// console.log(numbers);
// numbers.push(6);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// console.log(numbers.length);

// =========== Ques 5

// var boolArray = [true, false, true, false];
// console.log(boolArray[0]);
// console.log(boolArray[1]);
// boolArray[2] = false;
// console.log(boolArray);
// boolArray.push(true);
// boolArray.pop();
// console.log(boolArray);
// console.log(boolArray.length);

// =========== Ques 6

// var mixedArray = ["John", 25, true, 3.14, false];
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[2]);
// mixedArray[3] = 2.71;
// console.log(mixedArray);
// mixedArray.push("Alice");
// console.log(mixedArray);
// mixedArray.pop();
// console.log(mixedArray);
// console.log(mixedArray.length);

// =========== Ques 7


// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Education Qualifications in Pakistan:</h1>");
// document.write("<ul>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ul>");

// =========== Ques 8

// var studentNames = ["John", "Jane", "Alice"];
// var studentScores = [420, 380, 450];
// var totalMarks = 500;
// var percentages = [];
// for (var i = 0; i < studentScores.length; i++) {
//     var percentage = (studentScores[i] / totalMarks) * 100;
//     percentages.push(percentage);
// }
// console.log(percentages)
// for (var i = 0; i < studentNames.length; i++) {
//     document.write("<h3>Student: " + studentNames[i] + "</h3>");
//     document.write("Score: " + studentScores[i] + "<br>");
//     document.write("Percentage: " + percentages[i] + "%<br><br>");
// }

// =========== Ques 9

// var colors = ["Red", "Green", "Blue"];
// document.write("<h3>Original Array: " + colors + "</h3><br>");
// var colorToAddAtBeginning = prompt("Enter a color to add at the beginning of the array:");
// colors.unshift(colorToAddAtBeginning);
// document.write("<h3>Array after adding color at the beginning: " + colors + "</h3><br>");
// var colorToAddAtEnd = prompt("Enter a color to add at the end of the array:");
// colors.push(colorToAddAtEnd);
// document.write("<h3>Array after adding color at the end: " + colors + "</h3><br>");
// colors.unshift("Yellow", "Orange");
// document.write("<h3>Array after adding two colors at the beginning: " + colors + "</h3><br>");
// colors.shift();
// document.write("<h3>Array after deleting the first color: " + colors + "</h3><br>");
// colors.pop();
// document.write("<h3>Array after deleting the last color: " + colors + "</h3><br>");
// var indexToAdd = prompt("Enter the index at which you want to add a color:");
// var colorToAdd = prompt("Enter the color you want to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write("<h3>Array after adding color at a specific index: " + colors + "</h3><br>");
// var indexToDelete = prompt("Enter the index from which you want to delete color(s):");
// var numColorsToDelete = prompt("Enter the number of colors you want to delete:");
// colors.splice(indexToDelete, numColorsToDelete);
// document.write("<h3>Array after deleting color(s) from a specific index: " + colors + "</h3><br>");

// =========== Ques 10

// var scores = [85, 92, 78, 95, 88, 91];
// console.log("Original Array: " + scores);

// Method 1
// scores.sort(function (a, b) {
// return a - b;
// });
// console.log("Sorted Array (Ascending Order): " + scores);

// Method 2
// console.log(scores.sort().join(","));

// =========== Ques 11
// =========== Ques 12
// =========== Ques 13
// =========== Ques 14
// =========== Ques 15