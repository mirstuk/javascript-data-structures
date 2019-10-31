/*******************************************************************************
 *
 *      Priority Queue
 *      assuming a lower number == higher priority
 *
 ******************************************************************************/

function PriorityQueue() {
  const collection = [];

  this.entries = function() {
    return collection;
  };

  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) collection.push(element);
    }
    return collection;
  };

  this.dequeue = function() {
    const value = collection.shift();
    return value[0];
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
}

const pq = new PriorityQueue();
console.log('\n- Init new queue\n');
console.log('\n- each element is in the form:\n\t[value, priority]\n');
console.log("\n- enqueue element ['pippo', 2]:\n", pq.enqueue(['pippo', 2]));
console.log("\n- enqueue element ['johnny', 3]:\n", pq.enqueue(['johnny', 3]));
console.log("\n- enqueue element ['mary', 1]:\n", pq.enqueue(['mary', 1]));
console.log("\n- enqueue element ['steve', 5]:\n", pq.enqueue(['steve', 5]));
console.log('\n- queue is empty:\n', pq.isEmpty());
console.log('\n- show queue entries:\n', pq.entries());
console.log('\n- queue size is:\n', pq.size());
console.log('\n- dequeue element:\n', pq.dequeue());
console.log('\n- show queue entries:\n', pq.entries());
console.log('\n- new queue size is:\n', pq.size());
console.log('\n- queue front element is:\n', pq.front());
