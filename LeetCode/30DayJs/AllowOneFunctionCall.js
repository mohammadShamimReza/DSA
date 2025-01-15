var once = function (fn) {
  let call = false;
  return function (...args) {
    if (!call) {
      call = true;
      return fn(...args);
    }
    return undefined;
  };
};

const res1 = once((a, b, c) => a + b + c);
console.log(res1);
