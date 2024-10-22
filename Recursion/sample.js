

function demo(n) {
    // base case: if n equals 10, stop the recursion
    if (n === 10) return;  // base case
    // recursive case: do the job 
    console.log(n)
    // recursive call: call the fuction again and again
    demo(n+1)
}

demo(1);