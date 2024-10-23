let arr = [0, 1, 0];


const binarySearch = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
     return   mid;
    }
    if (arr[mid] < arr[mid +1]) {
        left = mid + 1;
    } else {
        right = mid -  1;
    }
  }
};

console.log(binarySearch(arr));
