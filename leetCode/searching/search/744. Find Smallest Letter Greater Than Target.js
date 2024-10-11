let letters = ["c","f","j", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"];

const target = "j";

const binarySearch = (letters, target) => {
  let left = 0;
  let right = letters.length - 1;
  let mid;

  const n = letters.length;  
  while (left <= right) {

    mid = Math.floor((left + right) / 2);
    if (letters[mid] === target) {
      return letters[mid + 1];
    } else if (letters[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
    return left == n ? letters[0] : letters[left];
};

console.log(binarySearch(letters, target));
