/*******************************************************************************
 *
 *      Trie
 *
 ******************************************************************************/

const Node = function() {
  this.keys = new Map();
  this.end = false;

  this.setEnd = function() {
    this.end = true;
  };

  this.isEnd = function() {
    return this.end;
  };
};

const Trie = function() {
  this.root = new Node();

  this.add = function(input, node = this.root) {
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  this.isWord = function(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  };

  this.print = function() {
    const words = [];
    let search = function(node, string) {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : null;
  };
};

const t = new Trie();
t.add('ball');
t.add('bat');
t.add('doll');
t.add('dork');
t.add('do');
t.add('dorm');
t.add('send');
t.add('sense');
console.log(`there is the word 'doll': ${t.isWord('doll')}`);
console.log(`there is the word 'dor': ${t.isWord('dor')}`);
console.log(`there is the word 'dorf': ${t.isWord('dorf')}`);
console.log(`there is the word 'dork': ${t.isWord('dork')}`);
console.log(`The trie contains words: ${t.print()}`);
