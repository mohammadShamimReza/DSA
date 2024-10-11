function missingNumber(nums) {
  let add = 0;

  for (let i = 0; i <= nums.length ; i++) {
    add = add + i;
    if (i <= nums.length - 1) {
      add = add - nums[i];
    }
  }
  console.log(add)

  return add;
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
