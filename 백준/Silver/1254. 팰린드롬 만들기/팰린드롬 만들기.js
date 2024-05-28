const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("");

let arr = [];
let count = 0;

for (let i = 0; i < input.length; i++) {
  const newArr = [...input, ...arr];
  if (newArr.join("") === newArr.reverse().join("")) {
    count = newArr.join("").length;
    break;
  } else {
    arr.unshift(input[i]);
  }
}

console.log(count);