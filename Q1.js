// How to find duplicate elements in an array?
const arrNumber = [1, 2, 8, 2, 9, 8];

const duplicateElements = arrNumber.filter(
  (element, index, arr) => arr.indexOf(element) !== index
);

console.log(duplicateElements); // Output: [2, 8]
