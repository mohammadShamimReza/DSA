let nums = [1, 3, 5, 6];

const target = 7;

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(binarySearch(nums, target));
