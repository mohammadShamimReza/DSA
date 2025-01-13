var createCounter = function (init) {
  let val = init;
  return {
    increment: function () {
      return (val += 1);
    },
    decrement: function () {
      return (val -= 1);
    },
    reset: function () {
      return (val = init);
    },
  };
};

const counter = createCounter(5);
console.log(
  counter.increment(),
  counter.increment(),
  counter.decrement(),
  counter.reset()
);
