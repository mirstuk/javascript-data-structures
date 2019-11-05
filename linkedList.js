/*******************************************************************************
 *
 *      Linked List
 *
 ******************************************************************************/

const LinkedList = function() {
  let length = 0;
  let head = null;

  const Node = function(element) {
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
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  this.remove = function(element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.next !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  this.isEmpty = function() {
    return length === 0;
  };

  this.indexOf = function(element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  };

  this.elementAt = function(index) {
    let currentNode = head;
    let count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function(index, element) {
    const node = new Node(element);

    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
    return true;
  };

  this.removeAt = function(index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };

  this.toArray = function() {
    let array = [];
    let currentNode;
    if (head !== null) {
      currentNode = head;
      array.push(currentNode.element);
      while (currentNode.next) {
        currentNode = currentNode.next;
        array.push(currentNode.element);
      }
    }
    return array;
  };
};
console.log('\nInit a new linked list and adding a bunch of elements\n');
const list = new LinkedList();
list.add('Kitten');
list.add('Puppy');
list.add('Dog');
list.add('Cat');
list.add('Fish');

console.log('\nMy list:\n', list.toArray());
console.log('\nList size is:\n', list.size());
console.log("\nIndex of Element 'Fish':\n", list.indexOf('Fish'));
console.log('\nRemove element at index 3:\n', list.removeAt(3));
console.log('\nNew list:\n', list.toArray());

console.log(list.addAt(3, 'Lion') ? '\nAdded element at index 3\n' : '');
console.log('\nElement at index 3:\n', list.elementAt(3));

console.log('\nNew list:\n', list.toArray());
