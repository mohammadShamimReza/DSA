let arr = [3, 8, 11, 34, 1];

// you should find the index of the target number in the array using a linear search algorithm
const target = 51;

function linearSearch(arr, target) {
  // iterate over each element in the array and check if it matches the target
  for (let i = 0; i < arr.length; i++) {
    // if the current element matches the target, return its index
    if (arr[i] === target) {
      return i;
    }
  }
  // if no match is found, return -1
  return -1;
}

console.log(linearSearch(arr, target));
