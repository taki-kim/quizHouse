const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (let i = 0; i < input.length; i++) {
  let [s, t] = input[i].split(" ");
  s = s.split("");
  t = t.split("");

  while (t.length) {
    if (s[0] === t[0]) {
      s.shift();
      t.shift();
    } else {
      t.shift();
    }
  }

  if (!s.length) answer.push("Yes");
  else answer.push("No");
}

console.log(answer.join("\n").trim());