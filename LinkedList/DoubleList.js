// Doubly linked list implementation


class Node {
    constructor(value, next = null, prev = null) { 
        this.value = value
        this.next = next
        this.prev = prev
            
    }
}


class Doublly {
    constructor(value) {
        let newNode = new Node(value)
        this.head = this.tail = newNode;
        this.length = 1
    }


    append(value) {
        let node  = new Node(value)
        this.length++
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        
        console.log(node)

    }
}


let list = new Doublly(5)
list.append(20)
list
console.log(list)
