let arr = [5, 10, 0,  3, 2, 13, 0, 1];

function SelectionSort(arr) {
    for (i = 0; i < arr.length; i++){
        let minIndex = i;
        for (j = i; j < arr.length; j++){
            if (arr[minIndex ] > arr[j]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp

    }
}

console.log(SelectionSort(arr));

arr;