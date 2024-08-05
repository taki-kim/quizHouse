const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let str = ["U", "C", "P", "C"];

for (let i = 0; i < input.length; i++) {
  if (!str.length) break;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === str[0]) str.shift();
    if (!str.length) break;
  }
}

console.log(!str.length ? "I love UCPC" : "I hate UCPC");