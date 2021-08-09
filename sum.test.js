/*
Continued here
>>
     > "require(`./sum`)" will import the sum function // backward single tick, found on top of the tab button (sometimes)
     > lets test if we give it parameters 1 + 2 === 3
     > to write a function with jest, we use "test()" function
     > the test() fun is a string of what the test is doing!
     > when the test is run, whats typed in side the test() fun will appear in the console
     > second in the test() fun we add a function, its what gets called to run your test 
     > inside this function, we need to make sure our expected result happens 
     > in jest there are test functions that allow you to do that
     > expect() //we expect something to equal something else
     > if you save that and run it: npm test


*/

const { test } = require("@jest/globals");
const sum = require(`./sum`);

test(`properly adds two numbers`, () => {
  // ATTN: ".toBe()" is one of many functions in jest, like expect()

  expect(sum(1, 2)).toBe(3);
});
