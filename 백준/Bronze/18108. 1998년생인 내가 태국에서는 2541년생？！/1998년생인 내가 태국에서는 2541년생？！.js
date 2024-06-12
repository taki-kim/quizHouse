const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = +require("fs").readFileSync(filePath);

console.log(input - 543);