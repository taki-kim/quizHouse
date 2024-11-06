const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("");

const answer = input.sort((a, b) => b - a).join("");

console.log(answer);
