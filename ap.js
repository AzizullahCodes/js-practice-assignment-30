// js-practice-assignment-30 
// ------------------------------------------------------------------------------------
// ques no 1
// Write a function addNumbers(a, b) that returns the sum of two numbers.
// Then write another function doubleSum(a, b) that uses addNumbers inside 
// it and returns double the sum.

// Expected Output:
// doubleSum(3, 4); // Output: 14  → (3 + 4 = 7, then 7 * 2 = 14)
// ans 
// function addNumbers(a,b){let sum = a + b;
//     return sum;
// }
// let out = addNumbers(2,4);
// console.log(out)

// function doubleSum(a,b){addNumbers(a,b);
//     let double = addNumbers(a,b) + addNumbers(a,b);
//     return double;
// }
// let final = doubleSum(3,2);
// console.log(final)
// ________________________________________________________________________________
// ques no 2
// Find Maximum and Increment
// Write a function findMax(x, y) that returns the larger of two numbers.
// Then write another function maxPlusOne(x, y) that calls findMax and returns the maximum value plus 1.
// ans 
// function findMax(x,y){let mx = Math.max(x,y);
//   return mx;
// }
// findMax(2,199,)

// function maxPlusOne(x,y){findMax(x,y);
//     let result = findMax(x,y) + 1;
//     return result;
// }
// let final = maxPlusOne(4,800);
// console.log(final)
// _____________________________________________________________________________________________
// ques no 3
// Greet and Introduce
// Write a function greet(name) that prints:
// Hello, <name>!

// Then write another function introduce(name, city) that calls greet(name) 
// and then prints:
// Welcome from <city>.
// Expected Output:
// introduce("Ali", "Karachi");
// // Output:
// // Hello, Ali!
// // Welcome from Karachi.
// ans 
// function greet(name){console.log('Hello',name)}

// function introduce(name,city){greet(name);
//     console.log('welcome form',city)
// }
// introduce('ali','mianwali')
// _____________________________________________________________________________________________
// ques no 4
// calculation
// ans 
// function addNumbers(num1,num2){let sum = num1 + num2;
//     return sum;
// }

// function multiplyFunction(num1,num2,num3){addNumbers(num1,num2);
//     let final = addNumbers(num1,num2) * num3;
//     return final;
// }
// let output = multiplyFunction(2,3,6);
// console.log(output)
// _____________________________________________________________________________________________
// ques no 5
// Multiply and Subtract
// Write a function multiply(x, y) that returns the product of two numbers.
// Then write another function multiplyAndSubtract(x, y, z) that 
// uses multiply to multiply x and y, then subtracts z.

// Expected Output
// multiplyAndSubtract(5, 4, 6); // Output: 14  → (5*4=20, 20-6=14)
// ans 
// function multiply(x,y){let product = x * y;
//     return product;
// }
// function multiplyAndSubtract(x,y,z){multiply(x,y);
//     let final = multiply(x,y) - z;
//     return final;

// }
// function addNumbers(x,y,z,a){
//     multiplyAndSubtract(x,y,z);
//     let last = multiplyAndSubtract(x,y,z) + a;
//     return last;
// }
// function divide(x,y,z,a,b){addNumbers(x,y,z,a);
//     let secondLast = addNumbers(x,y,z,a) / b;
//     return secondLast;
// }
// let thirdLast = divide(4,3,2,6,2);
// console.log(thirdLast)
// ___________________________________________________________________________________________
// ques no 6
// Write a function sayGoodbye(name) that prints:
// Goodbye, <name>!

// Write another function wishSafeTrip(name) that calls sayGoodbye(name) and then prints:
// Have a safe trip, <name>!

// Expected Output
// wishSafeTrip("Sara");
// // Output:
// // Goodbye, Sara!
// // Have a safe trip, Sara!
// ans
// function sayGoodbye(name){console.log('Goodbye' + ' ' + name);}

// function wishSafeTrip(name){sayGoodbye(name);
//     console.log('Have a safe trip'+',' + name)
// }
// wishSafeTrip('Alina')
// ______________________________________________________________________________________
// ques no 7
// Check Positive and Print Status
// Write a function isPositive(num) that returns true if num is positive;
//  otherwise false.

// ans 
// function isPositive(num){if(num > 0){return true;}
// else{return false;}}
// console.log(isPositive(0));
// __________________________________________________________________________________________
// ques no 8
// Square and Add Five
// Write a function square(num) that returns the square of a number.

// Write another function squareAndAddFive(num) that calls square(num) and 
// adds 5 to the result.
// ans 
// function square(num){let squar = num * num;
//     return squar;
// }
// function squareAndAddFive(num){square(num);
//     let final = square(num) + 5;
//     return final;
// }
// let result = squareAndAddFive(5);
// console.log(result);
// _____________________________________________________________________________________
// ques no 9
// Multiply and Check Greater Than 100
// Write a function product(a, b) that returns the product of two numbers.

// Write another function isProductGreaterThan100(a, b) that calls 
// product(a, b) and returns true if the result is greater than 100, 
// otherwise false.
// ans 
// function product(a,b){return a * b;}
// function isProductGreaterThan100(a,b){ return product(a,b) > 100}

// console.log(isProductGreaterThan100(300,5))
// _______________________________________________________________________________________
// ques no 10
// check if number less than 1000
// ans 
// function isLessThan(num){if(num < 1000){return true}
// else{return false}}
// console.log(isLessThan(200))
// ________________________________________________________________________________
// ques no 11
// Greeting and Age Info
// Write a function simpleGreet(name) that prints Hi, <name>!.

// Write another function greetWithAge(name, age) that calls simpleGreet(name)
//  and then prints You are <age>
//  years old.
// ans 
// function simpleGreet(name){console.log('Hi',name)}
 
// function greetWithAge(name,age){simpleGreet(name);
//     console.log('your are',age,'years old');
// }
// greetWithAge('Aliza',22);
// ____________________________________________________________________________________________________
// ques no 12
// Check Odd and Triple
// Write a function isOdd(num) that returns true if the number is odd, otherwise false.

// Write another function tripleIfOdd(num) that calls isOdd(num) and:

// If the number is odd, return triple the number.

// If not, return the number unchanged.

// ans 
// function isOdd(num){if(num % 2 !== 0){return true;}
// else{return false}}
// // console.log(isOdd(4))
// function tripleIfOdd(num){isOdd(num);
//     if(isOdd(num) === true){num = num * 3;
//         console.log(num)
//     }
//     else{console.log(num)}
// }
// tripleIfOdd(8)
// ______________________________________________________________________________________________
// ques 13
// Square a Number
// Write a function square(num) that returns the square of a number.
// Example: square(5) → 25
// ans 
// function squar(num){return num * num;
// }
//   let result = squar(4);
 
// console.log(result)
// __________________________________________________________________________________________________
// ques no 14
// Check Even or Odd
// Write a function isEven(num) that returns true if the number is even, otherwise false.
// Example: isEven(4) → true | isEven(5) → false
// let num = parseFloat(prompt('enter number'))
// function isEven(num){if(num % 2 === 0){return true;}
// else{return false;}}

// console.log(isEven(num))
//___________________________________________________________________________________________
// ques no 15
// Add Two Numbers
// Write a function addNumbers(a, b) that returns the sum of two numbers.

// ans 
// function addNumbers(a,b){let result = a + b;
//     return result;
// }
// let final = 50 + addNumbers(3,7);
// console.log(final)
// _______________________________________________________________________________________________
// ques 16
//  Get First Character
// Write a function getFirstChar(str) that returns the first character of a string.
// Example: getFirstChar("Hello") → "H"
// ans 
// function getFirstChar(str){let first = str.charAt();
//     return first;
// }
// let output = getFirstChar('hello');
// console.log(output)
// ___________________________________________________________________________________________
// ques no 17
// Calculate Area of Rectangle
// Write a function rectangleArea(length, width) that returns the area of a rectangle.
// Example: rectangleArea(5, 3) → 15
// ans 
// let length = parseFloat(prompt('enter length'));
// let width  = parseFloat(prompt('enter width'));
// function rectangleArea(length,width){let area = length * width;
//     return area;
// }
// let result = rectangleArea(length,width);
// console.log(result);
// ____________________________________________________________________________________________
// ques no 18
// Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that converts Celsius temperature
//  to Fahrenheit.
// Formula: (C × 9/5) + 32
// Example: celsiusToFahrenheit(0) → 32
// ans 
// function celsiusToFahrenheit(celsius){let Fahrenheit = (celsius * 9 / 5) + 32;
//     return Fahrenheit;
// }
// let final = celsiusToFahrenheit(33);
// console.log(final)
// _________________________________________________________________________________________________
// ques no 19
// Check if String Contains ‘a’
// Write a function containsA(str) that returns true if the string contains the letter
//  a (lowercase).
// Example: containsA("apple") → true, containsA("Hello") → false

// ans 
// function containsA(str){
//     for(let i = 0 ; i < str.length; i ++){if(str[i] === 'a')
//     {return true;}}
    
//     return false}
// console.log(containsA('fsgsgsljoguo'));

//__________________________________________________________________________________________________
// ques no 20
// check if 7 is in number
// ans 
// function check(str){for(let i = 0; i < str.length; i++)
// {if(str[i] === 'h'){return true;}}
// return false;
// }
// console.log(check('sfsgsfsag'));
// _________________________________________________________________________________________________
// ques no 21
// Find the Largest of Three Numbers
// Description:
// Write a function findMaxOfThree(a, b, c) that takes three numbers as arguments and returns the largest one using Math.max().

// findMaxOfThree(5, 8, 2); // → 8
// ans 
// function findMaxOfThree(a,b,c){let largest = Math.max(a,b,c);
//     return largest;
// }
//  let result = findMaxOfThree(7777,3242,32)
//  console.log(result)
// _____________________________________________________________________________________________________
// ques no 22
//  Get the Whole Part of Division
// Description:
// Write a function wholePart(a, b) that divides a by b and returns only the whole part 
// (without decimal) using Math.floor().

// wholePart(10, 3); // → 3
// wholePart(25, 4); // → 6
// ________________
// ans 
// function wholePart(a,b){let result = a / b;
//     return result;
// }
// let final = wholePart(4,3);
//      final = Math.floor(final);
// console.log(final)
// _____________________________________________________________________________________________________
// ques no 23
// escription:
// Write a function roundUp(num) that takes a decimal number and returns it rounded 
// up to the nearest integer using Math.ceil().

// javascript
// roundUp(4.2); // → 5
// ans 
// function roundUp(num){let ceil = Math.ceil(num);
//     return ceil;
// }
// let final = roundUp(78.9);
// console.log(final)
// ______________________________________________________________________________________________
// ques no 24
// 
// Write a function makePositive(num) that returns the positive version of any number.
// Example: makePositive(-7) → 7
// ans 
// function makePositive(num){let posit = Math.abs(num);
//     return posit;
// }
// let final = makePositive(-98);
// console.log(final)
// ______________________________________________________________________________________________
// ques no 25
// Write a function findSquareRoot(num) that returns the square root of a number.
// Example: findSquareRoot(25) → 5
// ans 
// function findSquareRoot(num){let result = Math.sqrt(num);
//     return result;

// }
// let final = findSquareRoot(9);
// console.log(final);
// ______________________________________________________________________________________________
// ques no 26
// Write a function roundToNearest(num) that rounds a number to the nearest
//  whole number.
// Example: roundToNearest(4.6) → 5
// ans 
// function roundToNearest(num){let result = Math.round(num);
//     return result;
// }
// let finalResult = roundToNearest(7.46);
// console.log(finalResult);
// _____________________________________________________________________________________________
// ques no 27 
// Write a function makeLowerCase(str) that converts a string to lowercase.
// Example: makeLowerCase("Hello World") → "hello world"
// ans 
// function makeLowerCase(str){let result = str.toLowerCase();
//     return result;
// }
// let finalResult = makeLowerCase('Hello World');
// console.log(finalResult)
// _________________________________________________________________________________________________
// ques no 28
// 
// Write a function shoutMessage(str) that converts a string to uppercase and
//  adds "!" at the end.
// Example: shoutMessage("stop") → "STOP!"
// ans 
// function shoutMessage(str){let result = str.toUpperCase() + '!';
//     return result;
// }
// let finalResult = shoutMessage('stop');
// console.log(finalResult);
// __________________________________________________________________________________________
// ques no 29
// Takes a string let word = "JavaScript";

// Prints the first character using .charAt()

// Prints the last character using .charAt() and .length
// ans 
// function char(str){let result = str.charAt();
//     return result;
// }
// let finalResult = char('aziz');
// console.log(finalResult);

// function last(str){let result = str.charAt(str.length - 1);
//     return result;
// }
// let finalResultt = last('axixu');
// console.log(finalResultt); 
// ___________________________________________________________________________________________
// ques no 30
// Converts a string number "45.67" to a float using parseFloat and an integer 
// using parseInt
// ans 
// function stringToNumber(str){let result = parseFloat(str);
//     console.log(typeof str);
//     return result;
// }
// let finalResult = stringToNumber('786.87');
//     console.log(typeof finalResult);
//     console.log(finalResult);
// _____________________________________________________________________________________________
// ques no 31
// Converts a number 42 to a string using .toString()
// ans 
// function numberToString(num){let result = num.toString();
//     console.log(typeof num);
//     return result;
// }
// let finalResult = numberToString(67.8);
//   console.log(typeof finalResult);
//   console.log(finalResult)
// __________________________________________________________________________________________________
// ques no 32
// Write a program that:

// Takes the radius as a string "5.7"

// Converts it to a number using parseFloat

// Calculates the area of a circle using Math.PI
// (Formula: area = π * radius²)

// Fixes the area to 2 decimal places using .toFixed()

// Prints the result with clear labels.

// Radius: 5.7
// Area of circle: 102.07
// ans 
// let radius = prompt('enter radius');
//    console.log(typeof radius);
//    radius = parseFloat(radius);
//    console.log(typeof radius);
//    let area = Math.PI * (radius*radius);
       
//    console.log(area);
//    area = area.toFixed(2);
//    console.log(area)
//    console.log('Area of circle is',area);
// _____________________________________________________________________________________________
// ques no 33
//  Array Manipulation Challenge
// Create an array: ["apple", "banana", "orange", "mango", "banana"]

// Do the following using splice, reverse, indexOf, lastIndexOf, shift, pop, unshift, and push:

// Find the first and last index of "banana".

// Remove "orange" using splice().

// Reverse the array.

// Remove the first and last elements using shift() and pop().

// Add "grape" at the start using unshift() and "kiwi" at the end using push().

// Log the final array.

// ans 
// let array = ['apple','banana','orange','mango','banana']
// let ind = array.indexOf('banana');
// console.log(ind);
// let lastind = array.lastIndexOf('banana');
// console.log(lastind);
//    array = array.splice(2,1);
//    console.log(array);
//    array = array.reverse();
//    console.log(array);
//    array = array.shift();
//    console.log(array);
//    array = array.pop();
//    console.log(array)
// let del = array.shift();
// console.log(del);
// console.log(array);
// let last = array.pop();
// console.log(last);
// console.log(array);
//  let add = array.unshift('grapes');
//  console.log(array);
//  let addLast = array.push('kivi');
//  console.log(array);
//  console.log(addLast);
//  let ad = array.splice(1,3);
//  console.log(array);
//  let addd = array.splice(2,0,'carrot','raddish','onion');
//  console.log(array);
// ________________________________________________________________________________
// ques no 34
// String Replace Challenge
// Create a string: Hello world! The world is beautiful. World peace is important."

// Do the following:

// Use replace() to replace the first occurrence of "world" with "earth".

// Use replaceAll() to replace all occurrences of "World" (case-sensitive) with "Earth".

// Log both results.
// ans 
// let str = 'Hello world! The world is beautiful. World peace is important.';
//   str = str.replace('world','earth');
// console.log(str);
//   str = str.toLocaleLowerCase();
//   console.log(str);
// str = str.replaceAll('world','Earth');
// console.log(str);
// __________________________________________________________________________________________
// ques no 35
// Write a JavaScript program using a for loop to calculate the sum of numbers from 1 to 50.

// Print the result in the console.
// Example Output:
// Sum of numbers from 1 to 50 is: 1275
// ans 
// let num = 0;
// for(let i = 1 ; i <= 50; i ++){
//           num = num + i;
          
// }
// console.log(num)
// _________________________________________________________________________________________________
// ques no 36 
//  Print a Star Pattern (Nested For Loop)
// Description:
// Write a JavaScript program using nested for loops to print a right-angled triangle pattern with stars *.
// For example, for 5 rows, the output should be:
// *
// **
// ***
// ****
// *****
// ans 
// for(let i = 1; i <= 5; i++){let pattern = '';
//     for(let j = 1; j <=i; j++){pattern = pattern + '*'}
//     console.log(pattern)
// }
// ____________________________________________________________________________________________
// ques no 37
//  Random Number Guessing
// Description:
// Write a JavaScript program that:
// 1️⃣ Uses Math.random() to generate a random number between 1 and 10 (both inclusive).
// 2️⃣ Prompts the user to enter a guess (you can use prompt in the browser).
// 3️⃣ Compares the user’s guess with the random number.
// 4️⃣ Shows a message in the console:

// "Congratulations! You guessed it right!" if the guess is correct.

// Otherwise, "Sorry, the correct number was X."
// ans 
// let enterGuess = parseFloat(prompt('enter guess no'));
// let random = Math.random()*10;
//     random = random + 1;
//     random = Math.floor(random);
// console.log(random);
// if(enterGuess === random){console.log('you guessed it right!')}
// else{console.log('sorry the correct number was x')}
// _____________________________________________________________________________________________
// ques no 38 
//  Concatenate Two Strings
// Description:
// Write a program that takes two strings:
// let firstName = "John";
// let lastName = "Doe";
// Use .concat() to combine them into a single string like "John Doe" 
// (with a space in between) and print the result.
// ans 
// let firstString = 'John';
// let lastString = 'Doe';
// let result = firstString.concat(' ' + lastString);
// console.log(result);
//_______________________________________________________________________________________________
// ques no 39
//  Concatenate Arrays
// Description:
// Write a program that uses .concat() to join two arrays:
// let fruits = ["apple", "banana"];
// let vegetables = ["carrot", "tomato"];
// ans 
// let fruits = ['apple','banana'];
// let vegetables = ['carrot','tomato'];
// let array = fruits.concat(vegetables);
// console.log(array);
// __________________________________________________________________________________________________
// ques no 40
// combine 5 string by concat();
// ans 
// let str1 = 'I';
// let str2 = 'love';
// let str3 = 'my';
// let str4 = 'friend';
// let str5 = 'most.';
// let sentence = str1.concat(' ',str2,' ',str3,' ',str4,' ',str5);
// console.log(sentence);
// _________________________________________________________________________________________________
// ques no 41
//  Slice Part of a String
// Description:
// Given this string:
// let text = "JavaScript is awesome!";
// Use .slice() to extract the word "JavaScript" and print it.
// ans 
// let text = 'Javascript is awesome';
//      text = text.slice(0,10);
//      console.log(text);
// __________________________________________________________________________________________________
// ques no 42
// Check Either Condition (OR)
// Description:
// Write a program that checks if a number is either less than 10 OR greater than 50.
// Example:
// let number = 8; // true, because 8 < 10
// Print true if the condition is true, otherwise print false.
// ans 
// let enterNumber = Number(prompt('enter number'));
// let flag = true;
// if(enterNumber < 10 || enterNumber > 50){flag = true;
//     console.log(flag)
// }
// else{flag = false;
//     console.log(flag)
// }
// ______________________________________________________________________________________
// ques 43 
// Check Both Conditions (AND)
// Description:
// Write a program that checks if a number is greater than 10 AND less than 20.
// Example:
// let number = 15; // true
// Print true if both conditions are true, otherwise print false.
// ans 
// let enterNumber = parseFloat(prompt('enter a number'));
// let flag = true;
// if(enterNumber > 10 && enterNumber < 20){flag = true;
//     console.log(flag)
// }
// else{flag = false;
//     console.log(flag)
// }
// _________________________________________________________________________________________________
// ques no 44
// Check Age and Citizenship
// Description:
// Ask the user’s age and citizenship status.

// If the age is 18 or above, then:

// If the citizenship is "Pakistan", print "You can vote in Pakistan."

// Else, print "You are eligible by age but not a citizen of Pakistan."

// If the age is below 18, print "You are not eligible to vote."

// let age = 20;
// let citizenship = "Pakistan";
// ans
// let enterAge = parseFloat(prompt('enter age'));
// if(enterAge >= 18){let citizenship = prompt('enter citizenship');
                    
//     if(citizenship === 'Pakistan'){console.log('you can vote in pakistan')}
//     else{console.log('you are eligible by vote but not a citizen of pakistan')}
// }
// else{console.log('you are not eligible to vote')}
// _________________________________________________________________________________________
// ques no 45
//  Display Current Date and Time
// Description:
// Write a program that creates a Date object for the current date and time.
// Print the full date and time to the console.
// ans 
// let current = Date();
// console.log(current);
// console.log(typeof current);
//   current = new Date();
//   console.log(typeof current);
// ________________________________________________________________________________________
// ques no 46
//  Get Today’s Year, Month, and Day
// Description:
// Create a Date object for today.
// Print only the year, the month (note: months are zero-based), and the date of the month separately.

// Example output:
// Year: 2025
// Month: 5   // (June, because January is 0)
// Date: 16
// ans 
// let current = new Date();
// let year = current.getFullYear();
// let month = current.getMonth();
// let date = current.getDate();
// console.log(year);
// console.log(month);
// console.log(date);
// _________________________________________________________________________________________________
// ques no 47
// Create a Specific Date
// Description:
// Create a Date object for your birthday (or any specific date).
// Print it to the console.
// Example:
// let birthday = new Date('2000-12-25');
// console.log(birthday);
// ans 
// let current = new Date();
// let birthday = new Date('01 May 1985');
// console.log(birthday)
// ____________________________________________________________________________________________
// ques no 48
//  Get the Day of the Week
// Description:
// Create a Date object for today and get the day of the week (0 for Sunday, 6 for Saturday).
// Print it to the console.
// Example output:
// Day of the week: 1   // (Monday)
// ans 
// let dayName = ['sun','mon','wed','tues','wed','thurs','fri','sat'];
// let current = new Date();
// let day = current.getDay();
// console.log(day);
// let final = dayName[day];
// console.log(final);
// _________________________________________________________________________________________________
// ques no 49
//  Add Days to Today
// Description:
// Create a Date object for today.
// Add 7 days to it and print the new date.
// date.setDate(date.getDate() + 7);
// ans 
// let current = new Date();
// let date = current.getDate();
//    date = date + 7;
//    console.log(date);
// __________________________________________________________________________________________________
// ques no 50
//  Get Hours, Minutes, and Seconds
// Description:
// Create a Date object for the current time.
// Print only the hours, minutes, and seconds separately.

// Hours: 19
// Minutes: 45
// Seconds: 30
// ans 
// let current = new Date();
// let hours = current.getHours();
// console.log(hours);
// let minutes = current.getMinutes();
// console.log(minutes);
// let seconds = current.getSeconds();
// console.log(seconds);
// let milliSecods = current.getMilliseconds();
// console.log(milliSecods);
// _________________________________________________________________________________________________
// ques no 51
// Compare Two Dates
// Description:
// Create two Date objects — one for today and one for January 1, 2025.
// Check if today’s date is before January 1, 2025, and print true or false.

// Hint: use .getTime() or simply compare directly.
// ans 
// let current = new Date();
// let date = current.toLocaleDateString();
// console.log(date);
// let anotherDate = new Date('01 January 2025');
//     anotherDate = anotherDate.toLocaleDateString();
//     console.log(anotherDate);
//     let flag = true;
//     if(date > anotherDate){flag = true;
//         console.log(flag)
//     }
//     else{flag = false;
//         console.log(flag)
//     }
// _____________________________________________________________________________________________
// ques no 52
//  Get Time in Milliseconds
// Description:
// Create a Date object for the current date and time.
// Print the time in milliseconds since January 1, 1970 (the Unix Epoch).

// Hint: .getTime()
// ans 
// let current = new Date();
// let time = current.getTime();
// console.log(time);
// let year = (time / 1000 / 60 /60 /24/30/12);
// console.log(year)
// ________________________________________________________________________________________
// ques no 53
// Format Date as YYYY-MM-DD
// Description:
// Create a Date object for today.
// Extract year, month, and date, and print them as YYYY-MM-DD.
// (💡 Remember: add 1 to the month because it’s zero-based!)
// Example output:
// 2025-06-16
// ans 
 let current = new Date();
let year = current.getFullYear();
 let month = current.getMonth();
     month = month + 1;
     let  date = current.getDate();
     let result = year + '-'+'0'+ month + '-' + date;
     console.log(result);
// ____________________________________________________________________________________________
// ques no 54
// Get Yesterday’s Date
// Description:
// Create a Date object for today.
// Subtract one day and print yesterday’s date.

// Hint
//  date.setDate(date.getDate() - 1);
//  ans 
//  let current = new Date();
// let date = current.getDate();
// let result = current.setDate(current.getDate()-1);
// console.log(result);
// ✅ Create a Date object for today
// let today = new Date();

// // ✅ Subtract one day
// today.setDate(today.getDate() - 1);

// // ✅ Print yesterday’s date
// console.log(today);
// __________________________________________________________________________________________
// ques no 55
// Get the Time Zone Offset
// Description:
// Create a Date object for the current date and time.
// Print the time zone offset in minutes (difference from UTC).
// (Hint: use .getTimezoneOffset())
// Example output:
// Timezone Offset: -300  // means UTC+5
// ans
// let current = new Date();
// let time = current.getTimezoneOffset();
// console.log(time);
// _________________________________________________________________________________________
// ques no 56
// Find the Number of Days Between Two Dates
// Description:
// Create two Date objects — for example, startDate (your birthday) and endDate (today).
// Calculate how many days are between them and print it.

// Hint:
// 1 day = 24 * 60 * 60 * 1000 milliseconds.
// ans 
// let current = new Date();
// let birthday = new Date('13 June 2025');
// let currentMilliseconds = current.getTime();
// console.log(currentMilliseconds);
// let birthdayMilliSecods = birthday.getTime();
// let days = currentMilliseconds - birthdayMilliSecods;
// console.log(days);
//  let result = days/(1000 * 60 *60 *24);
// console.log(result)
// ________________________________________________________________________________________
// ques no 57
// Get the First Day of This Year
// Description:
// Create a Date object for January 1st of this year.
// Print it to the console.

// Example:
// let firstDay = new Date(2025, 0, 1); // January is 0
// console.log(firstDay);
// ans 
// let current = new Date();
// let firstDay = new Date(' 1 January 2025');
// console.log(firstDay)