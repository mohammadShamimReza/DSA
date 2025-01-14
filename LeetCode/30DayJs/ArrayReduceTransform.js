var reducer = function (nums, fn, init) {
     let len = nums.length
    let acc = init
    console.log(acc);
    
    for (let i = 0; i < len; i++) {
        let data = fn(acc, nums[i]);
        acc = data
    }    
     return acc;

}

const res1 = reducer(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr;
  },
  0
);

console.log(res1);
