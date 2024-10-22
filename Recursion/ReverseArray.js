let arr = [1, 2, 3, 4, 5];

function reverseArray(arr, start, end) {
    if (start >= end) return;
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(arr, start + 1, end - 1);
    // return the reversed array after the recursive call ends 
    // last return statement is the return statement for the recursive call     
    return arr;
    
}

console.log(reverseArray(arr, 0, arr.length - 1))