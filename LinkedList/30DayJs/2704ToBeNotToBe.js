var expect = function (val) {
  return {
    toBe: function (tobe) {
      if (val === tobe) {
        return { value: true };
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (nottobe) {
      if (val !== nottobe) {
        return { value: true };
      } else {
       throw new Error("Equal");
      }
    },
  };
};

const res1 = expect(5).toBe(5);

const res2 = expect(5).toBe(null);

const res3 = expect(5).notToBe(null);

console.log(res1, res2, res3);
