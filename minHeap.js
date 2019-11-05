/*******************************************************************************
 *
 *      MinHeap
 *
 * a generic node value is less then equal his children values
 * a generic node has index i
 * his children have index 2 * i + 1 and 2 * i + 2
 * his parent has index floor(i - 1) / 2))
 *
 ******************************************************************************/

const MinHeap = function() {
  const heap = [];

  const parent = function(i) {
    return Math.floor((i - 1) / 2);
  };
  const left = function(i) {
    return 2 * i + 1;
  };

  const right = function(i) {
    return 2 * i + 2;
  };

  const isLeaf = function(i) {
    if (i >= (heap.length - 1) / 2 && i <= heap.length - 1) return true;
    return false;
  };

  const swap = function(a, b) {
    [heap[b], heap[a]] = [heap[a], heap[b]];
  };

  this.entries = function() {
    return heap;
  };

  this.insert = function(num) {
    heap.push(num);
    if (heap.length > 1) {
      let i = heap.length - 1;
      while (i >= 1) {
        if (heap[i] < heap[parent(i)]) {
          [heap[parent(i)], heap[i]] = [heap[i], heap[parent(i)]];
        }
        i = parent(i);
      }
    }
    return heap;
  };

  this.remove = function() {
    // pick min
    let min;
    // pop elem and restore heap property
    if (heap.length <= 2) {
      min = heap.shift();
    } else {
      min = heap[0];
      let i = 0;
    }
    return min;
  };

  this.sort = function() {
    const heapCopy = [...heap];
    const result = [];
    let i = heapCopy.remove();
    while (i !== undefined) {
      result.push(i);
      i = heapCopy.remove();
    }
    return result;
  };
};

const h = new MinHeap();
console.log('\n- init minHeap\n');
console.log('\n- insert elem 20\n', h.insert(20));
console.log('\n- insert elem 19\n', h.insert(19));
console.log('\n- insert elem 17\n', h.insert(17));
console.log('\n- insert elem 13\n', h.insert(13));
console.log('\n- insert elem 15\n', h.insert(15));
console.log('\n- insert elem 9\n', h.insert(9));
console.log('\n- insert elem 5\n', h.insert(5));
console.log('\n- insert elem 11\n', h.insert(11));
console.log('\n- insert elem 8\n', h.insert(8));
console.log('\n- insert elem 10\n', h.insert(10));
console.log('\n- insert elem 22\n', h.insert(22));

// console.log('\n- remove element:\n', h.remove());
// console.log('\n- remove element:\n', h.remove());
// console.log('\n- sorted collection:\n', h.sort());
// console.log('\n- heap is still existing:\n', h.entries());
