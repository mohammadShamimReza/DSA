function filter(arr, fn) {
    let data = []
    let len = arr.length
    for (let i = 0; i < len; i++){
        res =  fn(arr[i], i)
        if (res) {
            data.push(arr[i])
        }
    }
    return data
}

console.log(
  filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
  })
);
console.log(filter([1, 2, 3], function firstIndex(n, i) {
  return i === 0;
}));
console.log(
  filter([-2, -1, 0, 1, 2], function plusOne(n) {
    return n + 1;
  })
);