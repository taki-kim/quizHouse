const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

let dna = "";
let count = 0;

for (let m = 0; m < M; m++) {
  let myMap = new Map();
  for (let n = 0; n < N; n++) {
    myMap.set(
      input[n][m],
      myMap.has(input[n][m]) ? myMap.get(input[n][m]) + 1 : 1
    );
  }
  let arr = [...myMap].sort().sort((a, b) => b[1] - a[1]);
  dna += arr[0][0];
}

for (let m = 0; m < M; m++) {
  for (let n = 0; n < N; n++) {
    if (input[n][m] !== dna[m]) count++;
  }
}

console.log(dna);
console.log(count);