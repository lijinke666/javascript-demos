class Node {
  constructor(id) {
    this.id = id;
    this.prev = null;
    this.next = null;
  }
}

class SingleList {
  #headId = 'head';

  constructor() {
    this.size = 0;
    this.head = new Node(this.#headId);
    this.currentNode = null;
  }

  #validate(id) {
    const targetNode = this.find(id);

    if (!targetNode) {
      throw new Error(`Node ${id} Not Found`);
    }

    return targetNode;
  }

  display() {
    const result = [];
    let node = this.head;

    while (node) {
      result.push(node.id);
      node = node.next;
    }

    console.log(result.join('->'));
  }

  find(id) {
    let node = this.head;
    while (node && node.id !== id) {
      node = node.next;
    }

    return node;
  }

  last() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }

    return node;
  }

  append(id) {
    const lastNode = this.last();
    const node = new Node(id);
    lastNode.next = node;

    this.size++;
    return lastNode;
  }

  insert(targetId, id) {
    const targetNode = this.#validate(targetId);

    const node = new Node(id);
    node.prev = targetNode;
    node.next = targetNode.next;
    targetNode.next = node;

    this.size++;
  }

  remove(id) {
    this.#validate(id);

    let currentNode = this.head;

    while (currentNode.next && currentNode.next.id !== id) {
      currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next.next;

    this.size--;
  }

  clear() {
    this.head.next = null;
    this.size = 0;
  }

  // 链表是否有环 （快慢指针）
  isLoop() {
    var p = list.head;
    var q = list.head;

    while (q) {
      p = p.next;
      if (p.next) {
        q = q.next.next;
      }
      if (p === q) {
        return true;
      }
    }
    return false;
  }
}

const list = new SingleList();

list.append('a');
list.append('b');
list.append('c');

// console.log(list.last());
// console.log(list.find('test'));
// console.log(list.find('c'));
// console.log(list.find('a'));

// list.insert('b', 'insert');

// list.display();

// // console.log(list.find('insert'));

// list.remove('insert');

// list.display();

const A = list.find('a');
const C = list.last();

C.next = A;

// list.display();

console.log(list.isLoop());
