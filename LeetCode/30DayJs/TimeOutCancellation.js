var cancellable = function (fn, args, t) {

    const time = () => {
        setTimeout(fn(args), t);

    }

    return cancelFn = () => {
        clearTimeout(time)
    };
};

const res1 = cancellable((fn = (x) => x * 5), (args = [2]), (t = 20));

console.log(res1)
