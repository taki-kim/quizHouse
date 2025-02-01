const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = +input.shift();
let result = "";

for (let i = 0; i < N; i++) {
  const info = input[i].split(" ");
  const K = info[0];
  let scores = info.slice(1).map(Number);
  scores.sort((a, b) => a - b);
  let maxGap = 0;
  let min = scores[0];
  let max = scores[K - 1];
  scores.forEach((e, i) => {
    let gap = scores[i + 1] - e;
    gap >= maxGap ? (maxGap = gap) : null;
  });

  result += `Class ${i + 1}` + "\n";
  result += `Max ${max}, Min ${min}, Largest gap ${maxGap}` + "\n";
}

console.log(result.trim());