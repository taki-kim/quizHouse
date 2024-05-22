const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let list = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(list.shift());

list = list.map((e) => e.split(" "));
let answer = [];

list.sort((a, b) => {
  if (a[1] !== b[1]) {
    return b[1] - a[1];
  } else if (a[1] == b[1] && a[2] !== b[2]) {
    return a[2] - b[2];
  } else if (a[1] == b[1] && a[2] == b[2] && a[3] !== b[3]) {
    return b[3] - a[3];
  } else if (a[1] == b[1] && a[2] == b[2] && a[3] === b[3]) {
    if (a[0] < b[0]) return -1;
    else if (a[0] > b[0]) return 1;
    else return 0;
  }
});

list.forEach((e) => answer.push(e[0]));
console.log(answer.join("\n").trim());