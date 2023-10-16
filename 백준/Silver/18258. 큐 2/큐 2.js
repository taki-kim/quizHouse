class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  rear() {
    return this.items[this.tailIndex - 1];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input[0];
let queue = new Queue();
let answer = [];

for (let i = 1; i <= n; i++) {
  if (input[i] === "pop") {
    if (queue.getLength() === 0) {
      answer.push(-1);
    } else {
      answer.push(queue.dequeue());
    }
  } else if (input[i] === "size") {
    answer.push(queue.getLength());
  } else if (input[i] === "empty") {
    if (queue.getLength() === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (input[i] === "front") {
    if (queue.getLength() === 0) {
      answer.push(-1);
    } else {
      answer.push(queue.peek());
    }
  } else if (input[i] === "back") {
    if (queue.getLength() === 0) {
      answer.push(-1);
    } else {
      answer.push(queue.rear());
    }
  } else {
    const item = input[i].split(" ").map((e) => Number(e))[1];
    queue.enqueue(item);
  }
}

console.log(answer.join("\n"));