var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.isPresent = function(integer) {
    let currNode = this.root;
    while(currNode) {
      if(integer === currNode.value) {
        return true;
      } else if(integer < currNode.value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
      
    }
    return false;
  }
  // Only change code above this line
}