//String Concatination

//Live Demo:

//Plus operator:

// const greetingStart = "Hello my name is ";
// const myName = "Wiam. ";

// const weather = "The weather is sunny!";

// const greeting = greetingStart + myName + weather;
// console.log(greeting);

// String Interpolation:

// const greetingStart = "Hello ";
// const myName = "Wiam. ";

// const greeting = `${greetingStart}, my name is ${myName}`;
// console.log(greeting);

// Numbers
// we dont need strings for numbers
// can use mamthmatical operators to perform mathematical operations

// const age = 30;
// const sum = 10 + 2; //12
// const product = 10 * 2; //20
// const division = 10 / 2; //5
// const difference = 10 - 2; //8

// console.log(typeof sum);
// // if you wanted to add something that we would consider to be an integer or floating point number in other languages, sometimes it will cause a problem because it will change it

// //Floating point numbers: numbers with decimals
// // they can be rounded using math.round() function
// // use Math library
// // Library names always start with a capital letter

// const preciseAge = 30.682243;
// const preciseAge2 = 30.282243;

// const roughAge = Math.round(preciseAge); //31
// const roughAge2 = Math.round(preciseAge2); //30
// console.log(Math.round(preciseAge), roughAge2);

// const numberOfTrainees = 15;
// const numberOfMentors = 8;

// console.log(`number of trainees: ${numberOfTrainees}`);
// console.log(`number of mentors: ${numberOfMentors}`);
// console.log(
//   `number of trainees and mentors: ${numberOfMentors + numberOfTrainees}`
// );

// console.log(
//   `percentage of Trainees: ${
//     numberOfTrainees / (numberOfMentors + numberOfTrainees)
//   }`
// );

// Expressions: units of code that get evaluated // + - ...

// Statements: code that carries out instructions

// Have a look at the math library

// Afternoon Session:
// Dry Principle: Don't repeat yourself

// const firstName1 = "Winnie";
// const lastName1 = "Pooh";

// const firstName2 = "Christopher";
// const lastName2 = "Robin";

// function createGreeting(firstName, lastName) {
//   const greeting = `Hi there, ${firstName}, ${lastName}`;
//   return greeting;
// }

// const greeting1 = createGreeting(firstName1, lastName1);
// console.log(greeting1);

// const greeting2 = createGreeting(firstName2, lastName2);
// console.log(greeting2);

//console.log(); is not an output
