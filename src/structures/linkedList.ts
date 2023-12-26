export class LinkedList {
  size: number;
  root: any;

  constructor() {
    this.size = 0;
    this.root = null;
  }

  add(value: number) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;
      return true;
    }
    let node = this.root;
    while (node.next) {
      node = node.next;
    }
    let newNode = new Node(value);
    node.next = newNode;
    this.size += 1;
    return true;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = [];
    let node = this.root;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}

class Node {
  value: number;
  next: any;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
