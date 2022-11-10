// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// made a variable named number and assigned the value of 1 to it
// incremented the value of number to 2
// wrote a conditional code if number is greater than or equal to 2
//the console stated that 'yes' meaning number was equal or greater than 2

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// we assign secret as a variable
// we assign code as a variable and its value to 123
// code is equal to exactly 123 so secret is now assigned the value of 'duper'
//since code equaled to 123, code is multiplied by 2, so code's value now is 246
// 246 is less than 250 so the value of duper isn't assigned to secret
//when we console log secret the value will be super

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//the first if statement isn't coded because 55407 isnt greater than 80000
//the first else if statement isnt coded because isStudent isn't false or 30 isn't greater than 34
// the 2nd else if statement is coded because iSStudent has 'true' as its value
//since the 2nd else if statement is true the console log displays as 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

//we assign the value of 'true' to the variable 'isStudent'
//we assign the value of '34' to the variable 'age'
//we assign the value of '55407' to the variable 'zip'
//since the if statement is asking if isStudent value is true and zip is under 80000 then the console logs as 'You're a student on the West Coast!'
*/



// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
//FIX colorOne and colorTwo's values are vice versa so they should be switched to correct the error
//FIX 'colorTwo should also be coded within the brackets as colorTwo = 'purple'; 
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
// FIX the condition between '39' and 'time' should be && and not || since it is asking for AND instead of OR
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
//FIX I would prefer to put age on the left side and write out "if (age >= minAge)"" *I dont know if (minAge =< age) works
//FIX the 'no entry and enter' values needs to switched since the statement becomes true.
*/

