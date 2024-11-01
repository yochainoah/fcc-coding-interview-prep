class Set {
    constructor() {
      // This will hold the set
      this.dictionary = {};
      this.length = 0;
    }
    // This method will check for the presence of an element and return true or false
    has(element) {
      return this.dictionary[element] !== undefined;
    }
    // This method will return all the values in the set
    values() {
      return Object.keys(this.dictionary);
    }
    // This method will add an element to the set
    add(element) {
      if (!this.has(element)) {
        this.dictionary[element] = true;
        this.length++;
        return true;
      }
  
      return false;
    }
    // This method will remove an element from a set
    remove(element) {
      if (this.has(element)) {
        delete this.dictionary[element];
        this.length--;
        return true;
      }
  
      return false;
    }
    // This method will return the size of the set
    size() {
      return this.length;
    }
    // This is our union method 
    union(set) {
      const newSet = new Set();
      this.values().forEach(value => {
        newSet.add(value);
      })
      set.values().forEach(value => {
        newSet.add(value);
      })
  
      return newSet;
    }
    // This is our intersection method
    intersection(set) {
      const newSet = new Set();
  
      let largeSet;
      let smallSet;
      if (this.dictionary.length > set.length) {
        largeSet = this;
        smallSet = set;
      } else {
        largeSet = set;
        smallSet = this;
      }
  
      smallSet.values().forEach(value => {
        if (largeSet.dictionary[value]) {
          newSet.add(value);
        }
      })
  
      return newSet;
    }
  
    difference(set) {
      const newSet = new Set();
      
      this.values().forEach(value => {
        if (!set.dictionary[value]) {
          newSet.add(value);
        }
      })
  
      return newSet;
    }
    subset(set){
        let isSubset = true;
        if(this.length === set.length === 0){
            return true;
        }
        this.values().forEach((value)=>{
            console.log("this value",this.dictionary[value])
            if(!set.has(value)){
                isSubset  = false;
                return isSubset;
            }
        })
        return isSubset;
    }
}

const setA = new Set();
const setB = new Set();
setA.add('a');
setA.add('b');
setA.add('c');
setB.add('a');
setB.add('b');
console.log(setA.intersection(setB));
console.log(setA.subset(setB));