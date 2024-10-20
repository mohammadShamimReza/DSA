

let numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
}

function numberToWords(nums) { 
    let result = '';
    for (let i = 0; i < nums.length; i++){
        result = result + ' ' + numbers[nums[i]] 
            
        
    }
    return result
}

console.log(

    numberToWords([0,1,2])
)