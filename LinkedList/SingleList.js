// Singlely linked list implementation

class NodeLinkList{
    constructor( value, next = null) {
        this.value = value;
        this.next = next;
    }
}



class LinkedList {
    head = null;
    tail = null; 
    length = 0

    constructor(data, head) {
        let node = new NodeLinkList(data);
        this.head = this.tail = node;
        this.length = 1;
        console.log(node)
    }
    append(value) {
        let node = new NodeLinkList(value);
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
        if (position === 1) {
            this.prepend(value)
            return
        }
        if (position > this.length)  {
            this.append(value)
            return
        }
        let node = new NodeLinkList(value)
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

    print() {
        let data = this.head
        let result = [];
        while (data) {
          result.push(data.value);
          data = data.next;
        }
        return result;
    }

    updateValue(value, n) {
        let node = this.findNode(n)
        console.log(node)
        node.value = value
    }

    delete(n) {
        let prevNode = this.findNode(n - 1)

        prevNode.next = prevNode.next.next
        this.length--
    }
}


const list1 = new LinkedList(10);
list1.append(20);
// list1.append(30)
// list1.appendAtPositon(100, 1)

// list1.append(50)
// list1.prepend(40)

// list1.appendAtPositon(200, 1);
// list1.print()

// list1.updateValue(101, 1)
// list1.delete(2)
console.log(list1)

// list1.delete()
// console.log(list1)