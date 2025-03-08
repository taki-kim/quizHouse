const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(filePath).toString().trim();

const result = [];
let str = [];
let visited = new Array(input + 1).fill(0);

const backTracking = () => {
  if (str.length === input) {
    result.push(str.join(" ").trim());
    return;
  }
  for (let i = 1; i <= input; i++) {
    if (!visited[i]) {
      str.push(i);
      visited[i] = 1;
      backTracking(i);
      str.pop();
      visited[i] = 0;
    }
  }
};

backTracking();

console.log(result.join("\n").trim());