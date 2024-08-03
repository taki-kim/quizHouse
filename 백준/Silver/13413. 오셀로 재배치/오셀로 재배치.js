const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(filePath).toString().split("\n");

const T = +input.shift();

const answer = [];

for (let i = 0; i < T; i++) {
  let len = +input.shift();

  const str = input.shift();
  const compareStr = input.shift();

  let BChange = 0;
  let WChange = 0;

  for (let j = 0; j < len; j++) {
    if (str[j] !== compareStr[j]) {
      if (str[j] === "W") WChange++;
      if (str[j] === "B") BChange++;
    }
  }

  answer.push(WChange + BChange - Math.min(WChange, BChange));
}

console.log(answer.join("\n").trim());