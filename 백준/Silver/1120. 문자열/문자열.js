const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let [A, B] = input.split(" ");

let result = B.length;

for (let i = 0; i <= B.length - A.length; i++) {
  let differ = 0;
  for (let j = 0; j < A.length; j++) {
    if (A[j] !== B[i + j]) differ++;
  }
  if (differ < result) result = differ;
}

console.log(result);