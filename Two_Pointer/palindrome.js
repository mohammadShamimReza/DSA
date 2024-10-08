const arr = [1, 2, 3, 3, 2, 1]
const arr2 = [1, 2, 3, 3, 4, 5]

const checkPalindrome = (arr) => { 
    let i = 0;
    let j = arr.length - 1;
    while (i < j) { 
        if (arr[i] === arr[j]) { 
            i++;
            j--
        } else {
            return false
        }
        
    }
    return true;
}


console.log(checkPalindrome(arr)); 
console.log(checkPalindrome(arr2)); 