const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [N, M] = input.split(" ").map(Number);

let result = [];
let resStr = "";

const DFS = () => {
  if (result.length == M) {
    resStr += result.join(" ");
    resStr = resStr + "\n";
    return;
  }

  for (let i = 1; i <= N; i++) {
    result.push(i);
    DFS();
    result.pop();
  }
};

DFS();

console.log(resStr);