function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
  this.addAt = function(index, element) {
    if(index < 0 || index >= length) {
      return false;
    }
    var nodeAdded = new Node(element);
    if(index == 0) {
      nodeAdded.next = head;
      head = nodeAdded;
      length++;
    } else {
      let currentNode = head;
      let currentIndex = 0;
      while(currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      let nodeReplaced = currentNode.next;
      currentNode.next = nodeAdded;
      nodeAdded.next = nodeReplaced.next;
      length++;
    }
  }
  // Only change code above this line
}