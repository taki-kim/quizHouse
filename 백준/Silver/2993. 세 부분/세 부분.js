const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let answer = "";

for (let x = 1; x <= input.length - 2; x++) {
  for (let y = x + 1; y <= input.length - 1; y++) {
    let first = input.slice(0, x).split("").reverse().join("");
    let second = input.slice(x, y).split("").reverse().join("");
    let last = input.slice(y).split("").reverse().join("");

    const res = first + second + last;
    if (!answer) answer = res;
    else answer > res ? (answer = res) : null;
  }
}

console.log(answer);