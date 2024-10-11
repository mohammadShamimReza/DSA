class NodeLinkList{
    constructor( value, next = null) {
        this.value = value;
        this.next = next;
    }
}



class LinkedList {
    constructor(data) {
        let node = new NodeLinkList(data);
        this.head = this.tail = node;
        this.length = 1;
        console.log(node)
    }
    insert(data) {
        let node = new NodeLinkList(data);
        console.log(node)
        this.tail.next = node
        this.tail = node
        this.length++;
    }
    // delete() {
    //     this.length--;
    //     this.tail.next = null
    //     this.tail = null
    //     console.log()
    // }
}


const list1 = new LinkedList(10);
list1.insert(20)
list1.insert(30);
list1.insert(40)
console.log(list1)

// list1.delete()
// console.log(list1)