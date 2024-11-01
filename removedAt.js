var Node = function (data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  this.add = function (data) {
    let nodeAdded = new Node(data, this.tail);
    if (this.head == null) {
      this.head = nodeAdded;
      this.tail = nodeAdded;
    } else {
      let tempNode = this.tail;
      tempNode.next = nodeAdded;
      this.tail = nodeAdded;
    }
  };
  // Only change code above this line
  this.remove = function (data) {
    if (this.head == null) {
      return null;
    }
    let node = this.head;
    while (node !== this.tail) {
      if (node.data === data) {
        if (node.prev == null) {
          const tempNode = node.next;
          tempNode.prev = null;
          this.head = tempNode;
        } else {
          let prevNode = node.prev;
          prevNode.next = node.next;
        }
      }
      node = node.next;
    }
    if (node.data === data) {
      let prevNode = node.prev;
      prevNode.next = null;
      this.tail = prevNode;
    }
  };
};

const some_list = new DoublyLinkedList();
some_list.add(5);
some_list.add(6);
some_list.add(7);
some_list.remove(7);
console.log(some_list);
