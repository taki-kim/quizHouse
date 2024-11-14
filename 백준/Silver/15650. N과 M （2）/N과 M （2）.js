const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

const [N, M] = input;

let resultArr = [];
const results = [];

const BackTracking = (preNum) => {
  if (resultArr.length === M) {
    results.push(resultArr.join(" ").trim());
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (preNum < i) {
      resultArr.push(i);
      BackTracking(i);
      resultArr.pop();
    }
  }
};

BackTracking(0);

console.log(results.join("\n").trim());