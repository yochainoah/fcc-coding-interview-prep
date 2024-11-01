var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // Only change code below this line
  function isBinarySubtree(node) {
    return !node || (
      (!node.left || node.left.value < node.value) &&
      (!node.right || node.right.value >= node.value) &&
      (isBinarySubtree(node.left) && isBinarySubtree(node.right))) 
  }
  return isBinarySubtree(tree.root)
  // Only change code above this line
}