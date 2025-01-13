var expect = function (val) {
    function toBe(tobe) {
        if (val === tobe) {
            return {"value": true}
        } else {
            return { error: "Not Equal" };
        }

    }
    function notToBe(nottobe) {
 if (val !== nottobe) {
   return { value: true };
 } else {
   return { error: "Equal" };
 }
    }
};

const res1 = expect(5).toBe(5)

const res2 = expect(5).toBe(null);

const res3 = expect(5).notToBe(null);

console.log(res1, res2, res3)