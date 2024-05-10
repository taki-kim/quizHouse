const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [N, K] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

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
  size() {
    return this.tailIndex - this.headIndex;
  }
}

let myQueue = new Queue();
const result = [];

for (let i = 0; i < N; i++) {
  myQueue.enqueue(i + 1);
}

while (myQueue.size() >= K) {
  let slice = [];
  for (let i = 0; i < K; i++) {
    let deq = myQueue.dequeue();
    slice.push(deq);
  }
  result.push(slice.pop());
  slice.forEach((e) => myQueue.enqueue(e));
}

while (myQueue.size()) {
  let slice = [];
  const nextIndex = K % myQueue.size();
  if (nextIndex !== 0) {
    for (let i = 0; i < nextIndex; i++) {
      let deq = myQueue.dequeue();
      slice.push(deq);
    }
    result.push(slice.pop());
    slice.forEach((e) => myQueue.enqueue(e));
  } else if (nextIndex == 0) {
    while (myQueue.size()) {
      slice.push(myQueue.dequeue());
    }
    result.push(slice.pop());
    slice.forEach((e) => myQueue.enqueue(e));
  }
}

console.log("<" + result.join(", ").trim() + ">");