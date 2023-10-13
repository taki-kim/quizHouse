const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const num = parseInt(input);

for (let i = 1; i <= 9; i++) {
  const result = i * num;
  console.log(`${num} * ${i} = ${result}`);
}