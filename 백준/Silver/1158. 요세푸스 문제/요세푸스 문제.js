const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [N, K] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  pushFront(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }
  popFront() {
    if (this.isEmpty()) {
      return false;
    }

    const removedItem = this.head?.value;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return removedItem;
  }
  pushBack(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }
  popBack() {
    if (this.isEmpty()) return -1;

    const removedItem = this.tail?.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return removedItem;
  }
  getSize() {
    return this.size;
  }
}

const circle = new Deque();
const result = [];

for (let i = 1; i <= N; i++) {
  circle.pushBack(i);
}

for (let i = 0; i < N; i++) {
  for (let j = 1; j <= K; j++) {
    let item = circle.popFront();
    if (j < K) {
      circle.pushBack(item);
    } else {
      result.push(item);
    }
  }
}

console.log("<" + result.join(", ").trim() + ">");