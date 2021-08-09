function cloneArray(array) {
  // "..." is the spread operator syntax, it dulicates an array and creating a brand new array, from the current array that we are given
  return [...array];
}

module.exports = cloneArray;
