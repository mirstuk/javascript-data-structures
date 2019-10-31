/*******************************************************************************
 *
 *      mySet
 *
 ******************************************************************************/

function mySet() {
  const collection = [];

  this.has = function(element) {
    return collection.indexOf(element) !== -1;
  };

  this.entries = function() {
    return collection;
  };

  this.add = function(element) {
    if (!this.has(element)) {
      collection.push(element);
      return collection;
    }
    return false;
  };

  this.delete = function(element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function() {
    return collection.length;
  };

  this.union = function(otherSet) {
    const unionSet = new mySet();
    const firstSet = this.entries();
    const secondSet = otherSet.entries();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  this.intersection = function(otherSet) {
    const intersectionSet = new mySet();
    const firstSet = this.entries();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  this.difference = function(otherSet) {
    const differenceSet = new mySet();
    const firstSet = this.entries();
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  this.subset = function(otherSet) {
    const firstSet = this.entries();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  };
}

const setA = new mySet();
console.log('\n- Creating mySet instance setA\n');
console.log("\n- Adding element 'a' to setA:\n", setA.add('a'));

const setB = new mySet();
console.log('\n- Creating mySet instance setB\n');
console.log("\n- Adding element 'b' to setB:\n", setB.add('b'));
console.log("\n- Adding element 'c' to setB:\n", setB.add('c'));
console.log("\n- Adding element 'a' to setB:\n", setB.add('a'));
console.log("\n- Adding element 'd' to setB:\n", setB.add('d'));
console.log("\n- Adding element 'e' to setB:\n", setB.add('e'));

console.log("\nremove element 'e' from setB:\n", setB.delete('e'));
console.log("\nsetB has element 'e':\n", setB.has('e'));

console.log('\nsetA:\n', setA.entries());
console.log(`\nsetA size: ${setA.size()}\n`);

console.log('\nsetB:\n', setB.entries());
console.log(`\nsetB size: ${setB.size()}\n`);

console.log("\nsetA has element 'b':\n", setA.has('b'));
console.log('\nsetA is subset of setB:\n', setA.subset(setB));
console.log('\nsetA intersection setB:\n', setA.intersection(setB).entries());
console.log('\nsetA difference setB:\n', setA.difference(setB).entries());
console.log('\nsetB difference setA:\n', setB.difference(setA).entries());
console.log('\nsetA union setB:\n', setA.union(setB).entries());
