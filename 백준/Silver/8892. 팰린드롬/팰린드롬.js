const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();
const answer = [];

for (let t = 0; t < T; t++) {
  const k = +input.shift();
  let arr = [];
  let count = 0;

  for (let i = 0; i < k; i++) {
    arr.push(input.shift());
  }

  for (let f = 0; f < k; f++) {
    let checker = false;
    for (let b = 0; b < k; b++) {
      if (f == b) continue;
      const str = arr[f] + arr[b];
      if (str === str.split("").reverse().join("")) {
        answer.push(str);
        checker = true;
        count++;
        break;
      }
    }
    if (checker) break;
  }

  count === 0 ? answer.push(0) : null;
}

console.log(answer.join("\n").trim());