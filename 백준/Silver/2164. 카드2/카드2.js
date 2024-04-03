const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath);

const N = Number(input);

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }
  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
  getLength() {
    return this.tail - this.head;
  }
  peek() {
    return this.items[this.head];
  }
}

let queue = new Queue();

for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

while (queue.getLength() > 1) {
  queue.dequeue();
  const card = queue.dequeue();
  queue.enqueue(card);
}

console.log(queue.peek());
