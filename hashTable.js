/*******************************************************************************
 *
 *      Hash Tables
 *
 ******************************************************************************/

const HashTable = function() {
  const storage = [];
  const storageLimit = 15;

  const hash = (string, max) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };

  this.print = function() {
    console.log(storage);
  };

  this.add = function(key, value) {
    const index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
    return storage;
  };

  this.remove = function(key) {
    const index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    const index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

const ht = new HashTable();
ht.add('beau', 'person');
ht.add('tonka', 'dog');
ht.add('rex', 'dinosaur');
ht.add('tux', 'penguin');
ht.add('steve', 'person');
ht.add('michelangelo', 'artist');
console.log(ht.lookup('tux'));
ht.print();
