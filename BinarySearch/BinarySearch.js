const arr = [2, 5, 6,7, 8, 9, 10, 13]
const target = 8

function binarySearch(arr, target) { 
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        console.log(left, right)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
        
    }
    return -1

}

console.log(binarySearch(arr, target))

