var cancellable = function (fn, args, t) {
  const cancelFn = () => {
    clearTimeout(timer);
  };
  const timer = setTimeout(() => {
    fn(...args);
  }, t);

  return cancelFn;
};

const res1 = cancellable((fn = (x) => x * 5), (args = [2]), (t = 20));

console.log(res1);
