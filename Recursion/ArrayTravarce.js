let arr = [1, 3, 3, 5, 6, 7]

function arrayTravarce(arr, index) {
    if (index === arr.length) return;
    console.log(arr[index]);

    arrayTravarce(arr, index + 1);
}

arrayTravarce(arr, 0);