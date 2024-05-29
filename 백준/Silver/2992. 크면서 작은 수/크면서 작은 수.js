const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = require("fs").readFileSync(filePath).toString().trim();

const arr = N.split("");
arr.sort((a, b) => a - b);
const nums = [];
let node = [];

let visited = Array(arr.length).fill(0);

const dfs = (start, depth) => {
  node.push(arr[start]);
  visited[start] = 1;
  if (depth === arr.length) {
    nums.push(+[...node].join(""));
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (visited[i] === 0) {
        dfs(i, depth + 1);
      }
    }
  }
  visited[start] = 0;
  node.pop();
};

for (let i = 0; i < arr.length; i++) {
  dfs(i, 1);
}

let result = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > +N) {
    result = nums[i];
    break;
  }
}

console.log(result);