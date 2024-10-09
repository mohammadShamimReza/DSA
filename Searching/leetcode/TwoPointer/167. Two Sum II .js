let numbers = [2, 7, 11, 15]; let target = 9;


const findTowSumTarget = (numbers, target) => { 
    let i = 0; 
    let j = numbers.length - 1;

    while (i < j) {
        const sum = numbers[i] + numbers[j];
        if (sum === target) {
          return [i + 1, j + 1];
        } else if (sum < target) {
          i++;
        } else  {
          j--;
        }
    }
}

console.log(findTowSumTarget(numbers, target));