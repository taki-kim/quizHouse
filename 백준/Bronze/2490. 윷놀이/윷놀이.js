const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const results = [];

for (let i = 0; i < 3; i++) {
  let res = input[i].split(" ").map(Number);
  let one = 0;
  let zero = 0;
  for (let j = 0; j < 4; j++) {
    if (res[j] === 1) one++;
    if (res[j] === 0) zero++;
    if (j === 3) {
      if (one === 3 && zero === 1) results.push("A");
      if (one === 2 && zero === 2) results.push("B");
      if (one === 1 && zero === 3) results.push("C");
      if (one === 0 && zero === 4) results.push("D");
      if (one === 4 && zero === 0) results.push("E");
      one = 0;
      zero = 0;
    }
  }
}

console.log(results.join("\n").trim());
