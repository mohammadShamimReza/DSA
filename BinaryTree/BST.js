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

}

let bst = new BinarySearchTree(10);

bst