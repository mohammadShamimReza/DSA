let arr = [3, 1, 2, 4, 5, 19, 54, 2, 7, 9, 11, 13, 15, 17, 19];



function BubbleSort(arr) {

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length ; j++){ 
            if (arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
     }
    
}


console.log(BubbleSort(arr));


arr