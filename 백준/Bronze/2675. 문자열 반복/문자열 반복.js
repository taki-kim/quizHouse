const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = input.shift();

const result = [];

for (let i = 0; i < N; i++) {
  const [n, str] = input[i].split(" ");
  let newStr = "";
  for (let j = 0; j < str.length; j++) {
    for (let x = 0; x < n; x++) {
      newStr += str[j];
    }
  }

  result.push(newStr);
}

console.log(result.join("\n"));