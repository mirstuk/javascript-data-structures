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

  const minHeapify = function(i) {
    if (!isLeaf(i)) {
      if (heap[i] > heap[left(i)] || heap[i] > heap[right(i)]) {
        if (heap[right(i)]) {
          if (heap[left(i)] < heap[right(i)]) {
            swap(i, left(i));
            minHeapify(left(i));
          } else {
            swap(i, right(i));
            minHeapify(right(i));
          }
        } else {
          swap(i, left(i));
          minHeapify(left(i));
        }
      }
    }
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
          swap(i, parent(i));
        }
        i = parent(i);
      }
    }
    return heap;
  };

  this.remove = function() {
    let min = heap[0];
    swap(0, heap.length - 1);
    heap.pop();
    minHeapify(0);
    return min;
  };

  this.sort = function() {
    const result = [];
    let i = this.remove();
    while (i !== undefined) {
      result.push(i);
      i = this.remove();
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
console.log('\n- insert elem 1\n', h.insert(1));

// console.log('\n- remove element:\n', h.remove());
// console.log('\n- entries:\n', h.entries());

console.log('\n- sorted collection:\n', h.sort());
