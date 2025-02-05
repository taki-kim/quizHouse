const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = input.shift();

const dancers = new Set();
dancers.add("ChongChong");

for (let i = 0; i < N; i++) {
  const [A, B] = input[i].split(" ");
  if (dancers.has(A) || dancers.has(B)) {
    dancers.add(A);
    dancers.add(B);
  }
}

console.log([...dancers].length);
