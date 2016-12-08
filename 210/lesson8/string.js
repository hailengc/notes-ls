// 1.
// Create a variable named firstName and set it to your first name. Set another variable named lastName to store your last name. Add the two together, separated by a space and place it in a variable, fullName. Log fullName.

let firstName = 'Jamie';
let lastName = 'Wen';
let fullName = firstName + ' ' + lastName;

console.info(fullName);

// 2. 
// Call concat on firstName and pass in lastName. Log the return.
console.log(firstName.concat(lastName));
console.log(firstName);
console.log(lastName);

// 3. 
//Split the fullName variable into an array containing the first and last name separately. Log the result.

console.log(fullName.split(' '));


// 4.
// Create a variable named language and set it to "JavaScript". Find the first position of the letter "S" and store it in an idx variable. Log idx, which should be 

let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx);


// 5.
//Call charCodeAt on the language variable and pass in idx, and store the return in a variable called charCode. Log charCode, which should be 83.

let charCode = language.charCodeAt(idx);
console.log(charCode);

// 6. 
// Log the return of String.fromCharCode, passing in charCode as its argument. You should receive "S", the original character you searched for with your indexOf method call.
console.log(String.fromCharCode(charCode));


// 7.
// Find the last index of the letter "a" in the language variable and log the result, which should be 3.
console.log(language.lastIndexOf('a'));


// 8.
// Create two strings, a = 'a' and b = 'b'. Log a greater than comparison between the two. Change the value of b to an uppercase B by reassigning it. Log the same comparison.
let a = 'a';
let b = 'b';

console.log(a > b);
b = 'B';
console.log(a > b);


// 9.
//Create variables aIndex and vIndex and use them to store the first index of the letters "a" and "v" in the language string. Log the results of calling substr on language, passing in aIndex as the first argument and 4 as the second argument. Your call will look like language.substr(aIndex, 4). Do the same with vIndex. Both should return four consecutive letters, starting at the position of that letter.

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

// 10.
// Do the same with the substring method instead, passing in aIndex and vIndex. Notice substr returns 4 letters. Substr starts at the index based on the first argument, and obtains a number of characters based on the second argument. Substring, however, takes a starting index and an ending index and obtains the characters within those two.
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

// 11.
// Create strings called fact1 and fact2, setting them to the sentences "JavaScript is fun" and "Kids like it too". Create a variable compoundSentence, combining fact1 and fact2 together with the string " and ". Be sure to convert the second sentence to lower case. Log compoundSentence.

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

// 12. 
// Log the first letter of fact1 and fact2 using bracket notation.
console.log(fact1[0]);
console.log(fact2[0]);

// 13.
// Create a variable named pi and set it to the result of 22 / 7. Change the value of pi to a string using the toString method. Find the last index of the number 14. Log the result, which should also be 14.
let pi =  22 / 7;
pi = pi.toString();
console.log(pi.lastIndexOf('14'));

// 14
// Create a variable named boxNumber and set it to the result of 356.toString(). You should receive an error. If you can call toString on a variable that points to a number, why can't you call it directly on a number? In JavaScript, the period immediately after a number is read as a decimal place, not a method separator. Adding a second period will act as the method separator, allowing you to call it directly on a number.

// Rewrite the statement to use two periods between the number and the toString method and log the result. Then modify your code to use parentheses rather than two periods. Remove the second period and surround the number with parentheses. Log the result.


let boxNumber = 356..toString();
console.log(boxNumber);

boxNumber = (356).toString();
console.log(boxNumber);

// 15
// Convert the boxNumber variable back to a number using the parseInt method. To make sure you have converted it from a string to a number, you can log typeof boxNumber to check its type before and after your conversion. To convert it back to a string, rather than calling the toString method add an empty string to it. Log the typeof to verify it has been changed.

console.log(typeof boxNumber);

boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);

boxNumber = '' + boxNumber;
console.log(typeof boxNumber);

// 16
// Write a program that will ask for a user's name. The program will then greet the user. If the user writes "name!" than the computer yells back to the user. To check if the name provided ends with an exclamation (!) you can use the String.prototype.endsWith() method. If it does we mimic a scream by having message that is displayed in ALL CAPS using the String.prototype.toUpperCase() method. The ! can removed using String.prototype.slice() function. If no ! is at the end of the name provided then a simple greeting is displayed.

// Examples

// What is your name? Bob
// Hello Bob.                            // console output


// What is your name? Bob!
// HELLO BOB. WHY ARE WE SCREAMING?      // console output

let name = prompt('What is your name?');
if (!name.endsWith('!')) {
  console.log('Hello ' + name);
} else {
  console.log('HELLO ' + name.toUpperCase() + '. WHY ARE WE SCREAMING?');
}