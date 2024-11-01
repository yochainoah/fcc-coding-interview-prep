class CircularQueue {
    constructor(size) {
  
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
      // Only change code below this line

      if(this.queue[this.write] === null){
          this.queue[this.write] = item;
          this.write++;
          if(this.write > this.max){
            this.write = 0;
          }
          return item;
      }
      else{
        return null;
      }
  

    }
    dequeue() {
      // Only change code below this line
        if(this.queue[this.read] !== null){
            let item = this.queue[this.read];
            this.queue[this.read] = null;
            this.read ++;
            if(this.read > this.max){
                this.read = 0;
              }
            return item;
        }
        return null;
      // Only change code above this line
    }
}

const cq = new CircularQueue(5);
// console.log(cq.print())
// console.log(cq.enqueue('a'));
// console.log(cq.print())
// console.log(cq.dequeue())
console.log(cq.print())
console.log(cq.enqueue('a'));
console.log(cq.enqueue('b'));
console.log(cq.enqueue('d'));
console.log(cq.enqueue('e'));
console.log(cq.enqueue('f'));
console.log(cq.print())
console.log(cq.enqueue('f'));
console.log(cq.dequeue())
console.log(cq.print())
console.log(cq.dequeue())