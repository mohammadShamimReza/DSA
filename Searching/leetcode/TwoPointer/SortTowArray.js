const arr = [1, 2, 5, 9]
const arr2 = [3, 4, 6, 8, 10, 54, 93]

let arr3 = []

const sortTwoArrays = (arr, arr2) => {
    let i = 0;
    let j = 0;


    while (i < arr.length && j < arr2.length) {
        if (arr[i] < arr2[j]) { 
            arr3.push(arr[i]);
            i++;
        } else {
            arr3.push(arr2[j]);
            j++;
        }
    }
    while (i < arr.length) { 
        arr3.push(arr[i]);
        i++;
    }
    while (j < arr2.length) { 
        arr3.push(arr2[j]);
        j++;
    }
    return arr3;
    
}      

 console.log(sortTwoArrays(arr, arr2))
