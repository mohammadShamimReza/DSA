let arr = [1, 2, 3, 4, 5];

const target = 6;

function linearSearch(arr, target) { 
    for (let i = 0; i < arr.length; i++){
        console.log(i)
        if (arr[i] === target) { 
           return `Element ${target} found at index ${i}`;
             
        }
    }
            return "not found in the array";

}

console.log(linearSearch(arr, target))

