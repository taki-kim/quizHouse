const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

let reservs = input
  .map((e) => e.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0])
  .sort((a, b) => a[1] - b[1]);

let count = 1;
let curMeetingEndTime = reservs[0][1];

for (let i = 1; i < reservs.length; i++) {
  if (reservs[i][0] >= curMeetingEndTime) {
    count++;
    curMeetingEndTime = reservs[i][1];
  }
}

console.log(count);
