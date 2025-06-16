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