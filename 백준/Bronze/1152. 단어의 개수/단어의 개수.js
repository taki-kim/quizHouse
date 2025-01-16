const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

if (input.length === 1 && !input[0]) console.log(0);
else console.log(input.length);