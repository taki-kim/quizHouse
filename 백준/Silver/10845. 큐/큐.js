const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input.shift();

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
    if (this.tailIndex - this.headIndex === 0) {
      return -1;
    } else {
      const item = this.items[this.headIndex];
      delete this.items[this.headIndex];
      this.headIndex++;
      return item;
    }
  }
  front() {
    if (this.tailIndex - this.headIndex === 0) {
      return -1;
    } else {
      return this.items[this.headIndex];
    }
  }
  back() {
    if (this.tailIndex - this.headIndex === 0) {
      return -1;
    } else {
      return this.items[this.tailIndex - 1];
    }
  }
  size() {
    return this.tailIndex - this.headIndex;
  }
}

let myQueue = new Queue();
let result = [];
const queueController = (command) => {
  let commands = command.split(" ");
  switch (commands[0]) {
    case "push":
      myQueue.enqueue(Number(commands[1]));
      break;
    case "pop":
      result.push(myQueue.dequeue());
      break;
    case "size":
      result.push(myQueue.size());
      break;
    case "empty":
      result.push(myQueue.size() === 0 ? 1 : 0);
      break;
    case "front":
      result.push(myQueue.front());
      break;
    case "back":
      result.push(myQueue.back());
      break;
  }
};

input.forEach((e) => {
  queueController(e);
});

console.log(result.join("\n").trim());