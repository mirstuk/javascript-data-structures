/*******************************************************************************
 *
 *      Queue
 *
 ******************************************************************************/

const Queue = function() {
  const collection = [];

  this.entries = function() {
    return collection;
  };

  this.enqueue = function(element) {
    const beforeLen = collection.length;
    collection.push(element);
    if (collection.length > beforeLen) {
      return collection;
    }
  };

  this.dequeue = function(element) {
    return collection.shift();
  };

  this.front = function() {
    return collection[0];
  };

  this.size = function() {
    return collection.length;
  };

  this.isEmpty = function() {
    return collection.length === 0;
  };
};

const q = new Queue();
console.log('\n- init new queue\n');
console.log('\n- new queue is empty:\n', q.isEmpty());
console.log("\n- enqueue element 'a':\n", q.enqueue('a'));
console.log("\n- enqueue element 'b':\n", q.enqueue('b'));
console.log("\n- enqueue element 'c':\n", q.enqueue('c'));
console.log("\n- enqueue element 'd':\n", q.enqueue('d'));
console.log('\n- queue is empty:\n', q.isEmpty());
console.log('\n- show queue entries:\n', q.entries());
console.log('\n- queue size is:\n', q.size());
console.log('\n- dequeue element:\n', q.dequeue());
console.log('\n- show queue entries:\n', q.entries());
console.log('\n- new queue size is:\n', q.size());
console.log('\n- queue front element is:\n', q.front());
