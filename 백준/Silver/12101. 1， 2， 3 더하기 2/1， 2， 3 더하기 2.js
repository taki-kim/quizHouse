const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, k] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

const result = [];
const nums = [];

const backTracking = () => {
  const sum = nums.reduce((acc, cur) => (acc += cur));
  if (sum >= n) {
    if (sum === n) result.push(nums.join("+").trim());
    return;
  }

  for (let i = 1; i <= 3; i++) {
    nums.push(i);
    backTracking(i);
    nums.pop(i);
  }
};

for (let i = 1; i <= 3; i++) {
  nums.push(i);
  backTracking();
  nums.pop();
}

result[k - 1] ? console.log(result[k - 1]) : console.log(-1);