//  How to find max and min value in a given array in js

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// const maxValue = Math.max(...array);
// const minValue = Math.min(...array);

let maxValue = array[0];
let minValue = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > maxValue) {
    maxValue = array[i];
  }
  if (array[i] < minValue) {
    minValue = array[i];
  }
}

console.log(`Max value: ${maxValue}`);
console.log(`Min value: ${minValue}`);
