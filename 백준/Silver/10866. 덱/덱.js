const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

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
  pushBack(item) {
    const newNode = new Node(item);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  popFront() {
    if (this.isEmpty()) return -1;

    const removedItem = this.head?.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
    return removedItem;
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
  front() {
    if (this.isEmpty()) return -1;
    return this.head.value;
  }
  back() {
    if (this.isEmpty()) return -1;
    return this.tail.value;
  }
  getSize() {
    return this.size;
  }
}

const myDeque = new Deque();
const results = [];

const solution = (command) => {
  let [c01, c02] = command.split(" ");
  switch (c01) {
    case "push_front":
      c02 = Number(c02);
      myDeque.pushFront(c02);
      break;
    case "push_back":
      c02 = Number(c02);
      myDeque.pushBack(c02);
      break;
    case "pop_front":
      results.push(myDeque.popFront());
      break;
    case "pop_back":
      results.push(myDeque.popBack());
      break;
    case "size":
      results.push(myDeque.getSize());
      break;
    case "empty":
      if (myDeque.isEmpty()) results.push(1);
      else results.push(0);
      break;
    case "front":
      results.push(myDeque.front());
      break;
    case "back":
      results.push(myDeque.back());
      break;
  }
};

input.forEach((e, i) => {
  solution(e);
});

console.log(results.join("\n").trim());