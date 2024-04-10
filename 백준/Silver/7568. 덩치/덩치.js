const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const arr = input.map((e) => {
  const [x, y] = e.split(" ").map(Number);
  return [x, y];
});

const result = [];

for (let i = 0; i < arr.length; i++) {
  let count = 1;
  for (let j = 0; j < arr.length; j++) {
    if (i != j) {
      if (arr[j][0] > arr[i][0] && arr[j][1] > arr[i][1]) {
        count++;
      }
    }
  }
  result.push(count);
}

console.log(result.join(" "));