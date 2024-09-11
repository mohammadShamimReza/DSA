let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const target = 440;

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
    let mid;
    
    for (let index = 0; left < right; index++) {
        mid =  Math.floor((left + right) / 2);
        console.log(left,right, mid)
    console.log(index);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, target));
