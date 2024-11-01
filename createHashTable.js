
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key,value) => {
    this.collection[hash(key)] = value;
  }
  this.remove = (key) => {
    delete this.collection[hash(key)];
  }
  this.lookup = (key) => {
    if(!this.collection.hasOwnProperty(hash(key))) {
      return null;
    }
    return this.collection[hash(key)];
  }
  // Only change code above this line
};

const ht = new HashTable();
ht.add('test','test');
ht.remove('test');
console.log(ht.lookup('test'));

console.log(hash('abcd'));