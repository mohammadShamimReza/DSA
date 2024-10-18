class HashTable {
    constructor(size) {
        this.table = new Array(size)
        // for (let i = 0; i < this.table.length; i++) { 
        //     this.table[i] = new Array()
        // }
        // console.log(this.table)
        this.size = size
    }

    hashFunction(value) {
        value = value + '';
        let sum = 0;
        for (let i = 0; i < value.length; i++){
            sum = sum + value.charCodeAt(i)
            return sum % this.size
        }
    }
    set(value) {
        let index = this.hashFunction(value)
        let indexArray = this.table[index]
        if (!indexArray) { 
            indexArray = [value]
        } else {
            indexArray.push(value)
        }

        this.table[index] = indexArray
        console.log(this.table)
    }

    get(value) { 
        let index = this.hashFunction(value)
        let indexArray = this.table[index]
        for (let i = 0; i < indexArray.length; i++) { 
            if (indexArray[i] === value) { 
                return `${value} found at index ${index}`
            }
        }
        return `${value} not found in the hash table`
    }
}

let hash = new HashTable(5);

hash.set(10)
hash.set(10)
console.log(hash.get(10)); 






