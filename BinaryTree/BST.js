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

    search(target) {
        let node = this.root;
        while (true) {
            if (node === null) {
                return false;
            }
            if (node.value === target) {
                return true;
            }
            if (node.value < target) {
                node = node.right;
            } else {
                node = node.left;
            }
        }
    }

}

let bst = new BinarySearchTree(10);
bst.insert(25);
bst.insert(15);

console.log(bst.search(25))