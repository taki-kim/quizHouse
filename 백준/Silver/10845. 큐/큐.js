const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.tail = 0;
    this.head = 0;
  }

  push(item) {
    this.items[this.tail] = item;
    this.tail++;
  }
  pop() {
    let pop = -1;
    if (!this.empty()) {
      pop = this.items[this.head];
      delete this.items[this.head];
      this.head++;
    }
    return pop;
  }
  size() {
    return this.tail - this.head;
  }
  empty() {
    if (this.size()) return 0;
    else return 1;
  }
  front() {
    if (this.empty()) return -1;
    else return this.items[this.head];
  }
  back() {
    if (this.empty()) return -1;
    else return this.items[this.tail - 1];
  }
}

const N = +input.shift();

const result = [];

const myQueue = new Queue();

for (let i = 0; i < N; i++) {
  const [command, number] = input[i].split(" ");

  switch (command) {
    case "push":
      myQueue.push(number);
      break;
    case "pop":
      result.push(myQueue.pop());
      break;
    case "size":
      result.push(myQueue.size());
      break;
    case "empty":
      result.push(myQueue.empty());
      break;
    case "front":
      result.push(myQueue.front());
      break;
    case "back":
      result.push(myQueue.back());
      break;
    default:
      break;
  }
}

console.log(result.join("\n").trim());