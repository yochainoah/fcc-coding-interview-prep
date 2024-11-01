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
  this.inorder = function () {
    if (!this.root) {
      return null;
    }
    function traverse(node) {
      if (!node) {
        return [];
      }
      const nodes = traverse(node.left);
      nodes.push(node.value);
      nodes.push(...traverse(node.right));
      return nodes;
    }
    return traverse(this.root);
  };
  this.preorder = function () {
    if (!this.root) {
      return null;
    }
    function traverse(node) {
      if (!node) {
        return [];
      }
      const nodes = [node.value];
      nodes.push(...traverse(node.left));
      nodes.push(...traverse(node.right));
      return nodes;
    }
    return traverse(this.root);
  };
  this.postorder = function () {
    if (!this.root) {
      return null;
    }
    function traverse(node) {
      if (!node) {
        return [];
      }
      return [...traverse(node.left), ...traverse(node.right), node.value];
    }
    return traverse(this.root);
  };
  // Only change code above this line
}

const bst = new BinarySearchTree();
bst.add(10);
bst.add(5);
bst.add(15);
bst.add(3);
bst.add(7);
console.log(bst.postorder());
