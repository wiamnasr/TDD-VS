/* 
Unit-testing is when you test the smallest sections of your code

Will use "Jest" for testing, a library in JS for testing:

>>>>>>>>>>>>>>>>>>>>>>>>>>>>Installing Jest instructions<<<<<<<<<<<<<<<<<<<<<<<<<<<<
In Terminal, its important to make sure your code is running properly, its important to make sure your code is running properly: npm init -y  //initialize jest with all default values

>> This gives us the starting point, "package.json" in the explorer

then run: npm i --save-dev jest  //installs jest
, its important to make sure your code is running properly
>> Reason why its saved as a development dependency, is because it will only be used in development to make sure everything runs


>>>>>>>>>>>>>>>>>>>>>>>>>>> After Installation <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
>> If you go to package.json where the test script (should be displaying: "test": "echo \"Error: no test specified\" && exit 1")
>> Change to: "test": "jest"   ||   "test": "jest --coverge" // to get details abut how the test was run on each line of code
                                                            // Under "coverage > lcov-report > index.html": Also creates a .html file were you can open in the browser and visualize
                                                            // Makes it easier to visualize how much of our code we tested
>> now in Terminal, run: npm test // this will run jest and run all of our test
>> It will fail if you don't have any test set in place, so dont worry!

>> To Create a new test:
     > create a new file in the explorer of Visual Studio
     > name it by what you want to test, example: sum.test.js // take same file name you want to test and add to its end: .test.js
     > inside the file, you need to import the some function in this example
     > continued in the example "sum.test.js" file


*/

function cloneArray(array) {
  // "..." is the spread operator syntax, it dulicates an array and creating a brand new array, from the current array that we are given
  return [...array];
}

module.exports = cloneArray;
