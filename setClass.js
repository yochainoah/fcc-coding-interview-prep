class Set {
    constructor() {
      // Dictionary will hold the items of our set
      this.dictionary = {};
      this.length = 0;
    }
  
    // This method will check for the presence of an element and return true or false
    has(element) {
      return this.dictionary[element] !== undefined;
    }
  
    // This method will return all the values in the set
    values() {
      return Object.values(this.dictionary);
    }
  
    // Only change code below this line
    add(elem) {
        if(!this.has(elem)){
            this.dictionary[elem] = elem;
            this.length++;
            return true;
        }
        return false;
    }
    remove(elem) {
        if(this.has(elem)){
            delete this.dictionary[elem];
            this.length--;
            return true;
        }
        return false;
    }
    size() {
        return this.length;
    }
    union(set){
        const union = new Set()
        this.values().forEach((value) => union.add(value));
        set.values().forEach((value) => union.add(value));
        return union;
    }
}

const set1 = new Set;
const set2 = new Set;
set1.add('a');
set1.add('b');
set1.add('c');
console.log(set1.values());
set2.add('a');
set2.add('b');
set2.add('c');
set2.add('d');
set2.add('e');
console.log(set2.values());
console.log(set1.union(set2));
console.log(set1.values())



