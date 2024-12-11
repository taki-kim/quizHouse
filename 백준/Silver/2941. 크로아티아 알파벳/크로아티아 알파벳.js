const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let str = require("fs").readFileSync(filePath).toString().trim();

let answer = 0;

const dics = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

dics.forEach((e) => {
  str = str.split(e);
  answer += str.length - 1;
  str = str.join(" ");
});

str = str.split(" ").join("");

answer += str.length;

console.log(answer);
