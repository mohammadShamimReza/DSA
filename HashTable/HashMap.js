class Map {
constructor(parameters) {
    this.map ={}
    console.log(this.map)
}
put(key, value) {
    this.map[key] = value
}
    
    get(key) { 
        if (this.map[key]) { 
            return this.map[key]
        }
    }
}


let map1 = new Map()
map1.put('name', 'John')
map1.put('age', 25)
map1.put('name', 'New York') 
console.log( map1.get('name') )
console.log(map1)