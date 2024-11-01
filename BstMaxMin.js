var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.isEmpty = function () {
    if (this.root === null) {
      return true;
    }
    return false;
  };
  this.add = function (num) {
    let newNode = new Node(num);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode);
    }
  };
  this.addNode = function (root, newNode) {
    if (newNode.value < root.value) {
      if (root.left) {
        this.addNode(root.left, newNode);
      } else {
        root.left = newNode;
      }
    } else if (newNode.value > root.value) {
      if (root.right) {
        this.addNode(root.right, newNode);
      } else {
        root.right = newNode;
      }
    } else {
      return null;
    }
  };
  this.findMax = function () {
    if (this.isEmpty()) {
      return null;
    } else {
      this.searchMax(this.root);
    }
  };
  this.searchMax = function (node) {
    if (node.right) {
      return this.searchMax(node.right);
    } else {
      return node;
    }
  };
  // Only change code above this line
}

const bst = new BinarySearchTree();
console.log(bst.isEmpty())
bst.add(8);
bst.add(3);
bst.add(10);
bst.add(14);
bst.add(13);
bst.add(1);
bst.add(6);
bst.add(4);
bst.add(7);
console.log(bstfindMax())