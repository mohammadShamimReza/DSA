let str = 'madam'

function palindrom(str, start, end) {
    if (start >= end) return true;
    if(str[start] !== str[end]) return false;
    return palindrom(str, start + 1, end - 1);
}

console.log(palindrom(str, 0, str.length - 1));