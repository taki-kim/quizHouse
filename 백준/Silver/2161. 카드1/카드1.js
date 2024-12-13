const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(filePath).toString().trim();

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
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const myQueue = new Queue();
const result = [];

for (let i = 1; i <= input; i++) {
  myQueue.enqueue(i);
}

while (myQueue.getLength() > 1) {
  result.push(myQueue.dequeue());

  let reversingCard = myQueue.dequeue();
  myQueue.enqueue(reversingCard);
}

result.push(myQueue.dequeue());

console.log(result.join(" ").trim());