const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();

const map = new Map();

let answer = 0;

const sol = (str1, str2) => {
  let checked = Array(str1.length).fill(0);
  str1 = [...str1];
  str2 = [...str2];

  for (let i = 0; i < str2.length; i++) {
    if (checked[i]) continue;
    let target = str1[i];
    let changeTo = str2[i];

    for (let j = 0; j < str1.length; j++) {
      if (!checked[j] && str1[j] === target) {
        str1[j] = changeTo;
        checked[j] = 1;
      }
    }
  }

  return str1.join("") === str2.join("");
};

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    sol(input[i], input[j]) && sol(input[j], input[i]) ? answer++ : null;
  }
}

console.log(answer);