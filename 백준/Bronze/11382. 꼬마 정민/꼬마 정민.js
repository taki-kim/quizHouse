const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const [A,B,C] = input.map(Number);
console.log(A+B+C);