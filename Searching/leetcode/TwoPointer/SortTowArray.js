const arr2 = [3, 4, 6, 8, 10, 54, 93]
const arr = [1, 2, 5, 9]

let arr3 = []

const sortTwoArrays = (arr, arr2) => {
    const bigArr = arr.length > arr2.length ? arr : arr2;
    const smallArr = arr.length < arr2.length ? arr : arr2;
    let bi = 0;
    let sj = 0;
    let i = 0;
    while (i < bigArr.length) {
        if (bi < bigArr.length) {
            if (bigArr[bi] < smallArr[sj]) {
                arr3.push(bigArr[bi]);
                bi++;
            }
        }
        if (sj < smallArr.length) {
            if (smallArr[sj] < bigArr[bi]) { 
                arr3.push(smallArr[sj]);
                sj++;
            }
        }
        i++;
    }

    console.log(bi)

    while (bi < bigArr.length) {
        arr3.push(bigArr[bi]);
        bi++;
    }

    console.log(bi, bigArr.length)

    return arr3;
    
}      



 


 console.log(sortTwoArrays(arr, arr2))
