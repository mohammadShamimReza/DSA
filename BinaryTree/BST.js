class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


class BinarySearchTree {
    constructor(value) {
        this.root = new Node(value)
    }

    insert(value) { 
        let currentNode = this.root;
        while (true) {
            if (currentNode.value < value) {
                if (currentNode.right === null) { 
                    let node = new Node(value)
                    currentNode.right = node;
                    break;

                }
                currentNode = currentNode.right;
            } else {
                  if (currentNode.left === null) { 
                    let node = new Node(value)
                    currentNode.left = node;
                    break;

                  }
                currentNode = currentNode.left;
            }
        }
    }

}

let bst = new BinarySearchTree(10);
bst.insert(25);
bst.insert(15);

console.log(bst)