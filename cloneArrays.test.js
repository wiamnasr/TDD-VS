/*
if you use: "expect(cloneArray(array)).toBe(array);"
     > The test will show a failure and message: // Object.is equality
     > also will say: "If it should pass with deep equality, replace "toBe" with "toStrictEqual"
                    Expected: [1, 2, 3]
                    Received: serializes to the same string"
    > this is because of clone array that we use and the positions

    > we use .toEqual(array) instead
    > you can run: "expect(cloneArray(array)).not.toBe(array)"
    > this is to make sure that the clone array is actually making a copy and that its not just the same array
    
*/

const { expect } = require("@jest/globals");
const cloneArray = require(`./cloneArray`);

test(`properly clones array`, () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
