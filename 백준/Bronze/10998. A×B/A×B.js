const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs").readFileSync(filePath).toString();

const [X, Y] = input.split(" ").map(Number);

console.log(X * Y);