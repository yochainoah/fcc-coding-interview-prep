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
  // we count the number of edges not the number of nodes
  this.findMaxHeight = function () {
    function searchMaxHeight(root) {
      if (root === null) {
        return -1;
      }
      let leftHeight = searchMaxHeight(root.left);
      let rightHeight = searchMaxHeight(root.right);
      return 1 + Math.max(leftHeight, rightHeight);
    }
    return searchMaxHeight(this.root);
  };
  this.findMinHeight = function() {
    function searchMinHeight(root) {
      if(root === null) {
        return -1;
      }
      let leftHeight = searchMinHeight(root.left);
      let rightHeight = searchMinHeight(root.right);
      return 1 + Math.min(leftHeight,rightHeight);  
    }
    return searchMinHeight(this.root);
  }
  this.isBalanced = function() {
    if(this.findMaxHeight() - this.findMinHeight() <= 1) {
      return true;
    }
    return false;
  }
  // Only change code above this line
}

const bst = new BinarySearchTree();
bst.add(8);
bst.add(3);
bst.add(10);
bst.add(14);
bst.add(13);
bst.add(1);
bst.add(6);
bst.add(4);
bst.add(7);
console.log(bst.findMaxHeight());
