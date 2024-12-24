const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +require("fs").readFileSync(filePath).toString().trim();

let result = [];

for (let i = 0; i < N; i++) {
  let x = "";
  for (let j = 0; j <= i; j++) {
    x += "*";
  }
  result.push(x);
}

console.log(result.join("\n"));