const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const answer = [];
let result = [];
let temArr = [];

const BT = (preNum, arr, limit) => {
  if (limit === temArr.length) {
    result.push(temArr.join(" ").trim());
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (preNum < arr[i]) {
      temArr.push(arr[i]);
      BT(arr[i], arr, limit);
      temArr.pop();
    }
  }
};

for (let i = 0; i < input.length; i++) {
  if (Number(input[i][0]) === 0) break;

  const nums = input[i].split(" ").map(Number);
  const k = nums.shift();

  for (let j = 0; j < nums.length; j++) {
    temArr.push(nums[j]);
    BT(nums[j], nums, 6);
    temArr = [];
  }

  answer.push(result.join("\n"));
  result = [];
}

console.log(answer.join("\n\n").trim());