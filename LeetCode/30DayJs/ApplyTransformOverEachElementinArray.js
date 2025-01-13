function map(arr, fn) {
    let data = []
  for (let i = 0; i < arr.length; i++) {
    res = fn(arr[i], i);
    data.push(res);
  }

  return data;
}

function plusone(n) {
  return n + 1;
}
function plusI(n, i) {
  return n + i;
}
function constant(n, i) {
  return 42;
}
console.log(map([1, 2, 3], plusone));
console.log(map([1, 2, 3], plusI));
console.log(map([1, 2, 3], constant));

