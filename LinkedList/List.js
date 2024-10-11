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
    append(value) {
        let node = new NodeLinkList(value);
        console.log(node)
        this.tail.next = node
        this.tail = node
        this.length++;
    }

    prepend(value) {
        let node = new NodeLinkList(value)
        node.next = this.head
        this.head = node
        this.length++
    }


    appendAtPositon(value, position) {
        
    }



    // delete() {
    //     this.length--;
    //     this.tail.next = null
    //     this.tail = null
    //     console.log()
    // }
}


const list1 = new LinkedList(10);
list1.append(20);
list1.append(30);

list1.prepend(50);
list1.prepend(5)
list1.appendAtPositon(100, 3)
console.log(list1)

// list1.delete()
// console.log(list1)