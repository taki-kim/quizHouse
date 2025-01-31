const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = +input.shift();

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }
  pop() {
    let item = -1;
    if (!this.empty()) {
      item = this.stack.pop();
    }
    return item;
  }
  top() {
    let item = -1;
    if (!this.empty()) {
      item = this.stack[this.stack.length - 1];
    }
    return item;
  }
  size() {
    return this.stack.length;
  }
  empty() {
    if (this.size()) return 0;
    else return 1;
  }
}

const newStack = new Stack();
const result = [];

for (let i = 0; i < N; i++) {
  const [command, number] = input[i].split(" ");
  switch (command) {
    case "push":
      newStack.push(number);
      break;
    case "pop":
      result.push(newStack.pop());
      break;
    case "size":
      result.push(newStack.size());
      break;
    case "empty":
      result.push(newStack.empty());
      break;
    case "top":
      result.push(newStack.top());
      break;
  }
}

console.log(result.join("\n").trim());