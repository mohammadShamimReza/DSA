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
        let node = new NodeLinkList(value)
        console.log(node)
        let prevNode = this.findNode(position - 1)
        const temp = prevNode.next;
        prevNode.next = node;
        node.next = temp;
        this.length++
    }


    findNode(position) {
        let data = this.head
        let count = 0;

        while (true) {
            count++;
            if (count === position) {
                break
            }
            data = data.next
            
        }
        console.log(data)
        return data
    }

    
   
}


const list1 = new LinkedList(10);
list1.append(20);
list1.append(30)
list1.appendAtPositon(100, 2)
console.log(list1)

// list1.delete()
// console.log(list1)