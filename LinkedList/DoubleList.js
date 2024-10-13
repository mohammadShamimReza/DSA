// Doubly linked list implementation

class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Doublly {
  constructor(value) {
    let newNode = new Node(value);
      this.head = this.tail = newNode;
      this.tail.next = this.head
      this.head.prev = this.tail
    this.length = 1;
  }

  append(value) {
    let node = new Node(value);
    this.length++;
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  prepend(value) {
    let node = new Node(value);
    this.length++;
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
  insertAtPositon(value, position) {
    if (position === 1) {
      this.prepend(value);
      return;
    }
    if (position > this.length) {
      this.append(value);
      return;
    }
    let node = new Node(value);
    this.length++;

    let prevNode = this.findNode(position - 1);
    console.log(prevNode.value);
    let temp = prevNode.next;
    prevNode.next = node;
    node.prev = prevNode;
    node.next = temp;
  }

    delete(position) {
        let node = this.findNode(position - 1)
      console.log(node.value)
        node.next = node.next.next
        console.log(node.value)
        node.next.prev = node
        
        this.length--
    }
    

    print() {
        let data = this.head;
        let result = []

        while (data) {
            result.push(data.value)
          data =  data.next
        }
        return result
    }

  findNode(position) {
    let data = this.head;
    let count = 1;
    while (true) {
      if (position === count) {
        break;
      }
      data = data.next;
      count++;
    }
    return data;
  }
}

let list = new Doublly(5);
list.prepend(1)
list.prepend(2);
// list.append(20)
// list.insertAtPositon(30, 2);
list.delete(2)
// console.log(list.print());
console.log(list)

// console.log(list)
