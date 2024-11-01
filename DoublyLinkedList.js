var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = function(data) {
    if(this.head == null) {
      this.head = new Node(data, null);
    } else {
      let currentNode = this.head;
      while(currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(data, currentNode.data)
    }
    
  }
  // Only change code above this line
};

const some_list = new DoublyLinkedList();
some_list.add(5);
some_list.add(6)
console.log(some_list)