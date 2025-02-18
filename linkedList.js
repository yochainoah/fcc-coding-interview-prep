function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.head = function () {
    return head;
  };

  this.size = function () {
    return length;
  };

  this.add = function (element) {
    // Only change code below this line
    if (head === null) {
      head = new Node(element);
    } else {
      let current = head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(element);
    }
    // Only change code above this line
    length++;
  };
}

let linkedlist = new LinkedList();
linkedlist.add(10);
linkedlist.add(15);
console.log(linkedlist.size());
console.log(linkedlist.head());
