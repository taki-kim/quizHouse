const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, F] = require("fs").readFileSync(filePath).toString().split("\n");

N = N.split("");
N[N.length - 2] = "0";
N[N.length - 1] = "0";

N = +N.join("");
F = +F;

let result = 0;

for (let i = N; i < N + 100; i++) {
  if (i % F === 0) {
    result = i;
    break;
  }
}

result = result.toString().split("");
result = result[result.length - 2] + result[result.length - 1];

console.log(result);
