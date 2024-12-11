const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = +require("fs").readFileSync(filePath).toString().trim();

let sum = 0;
let answer = 0;

let endIndex = 0;

for (let i = 1; i <= N; i++) {
  sum += i;
  answer++;

  if (sum === N) {
    break;
  }

  if (sum > N) {
    sum -= i;
    answer--;
    endIndex = i - 1;

    break;
  }
}

console.log(answer);