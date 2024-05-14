const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const members = new Map();

for (let i = 0; i < N; i++) {
  const groupName = input.shift();
  const nums = Number(input.shift());
  for (let j = 0; j < nums; j++) {
    const name = input.shift();
    members.set(name, groupName);
  }
}

const result = [];

const membersArr = [...members].sort();

for (let i = 0; i < M * 2; i += 2) {
  if (input[i + 1] == 0) {
    for (let j = 0; j < membersArr.length; j++) {
      if (membersArr[j][1] == input[i]) result.push(membersArr[j][0]);
    }
  } else if (input[i + 1] == 1) {
    result.push(members.get(input[i]));
  }
}

console.log(result.join("\n"));