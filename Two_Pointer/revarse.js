const arr = [1, 2, 3, 4, 5];

const reversedArr = (arr) => {
    let i = 0;
    let k = arr.length - 1;
    while (i < k) {
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
        i++;
        k--;
    }
    return arr;
}

console.log(reversedArr(arr)); 