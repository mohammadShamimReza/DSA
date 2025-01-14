var argumentsLength = function (...args) {
    let totoal = 0
    console.log(args[0])
    for (let i = 0; i < args[0].length; i++){
        totoal++
        console.log(i)
    }
    
    return totoal

    // Or
    // return args[0].length
};

console.log(argumentsLength([1, 3, 4, 5,6]));
