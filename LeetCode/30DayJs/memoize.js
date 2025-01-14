// not solved by me

function memoize(fn) {
  return function (...args) {
    let cache = {};
    console.log(cache);

    if (args in cache) {
      console.log(cache);
      return cache[args];
    } else {
      let data = 0;
      for (let i = 0; i < args.length; i++) {
        data = fn(args[i]);
        const key = args.join(",");
        console.log(key);
        cache[JSON.stringify(args[i])] = data;
      }
      console.log(cache);

      return data;
    }
  };
}

const sum = (a) => {
  let c = 0;
  console.log(a.length);
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    c = c + a[i];
    console.log(c);
  }
  console.log(c);

  return c;
};

const res1 = memoize(sum)([2, 2], [2, 2], [], [1, 2], []);

console.log(res1);
