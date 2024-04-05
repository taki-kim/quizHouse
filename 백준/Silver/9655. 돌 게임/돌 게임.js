const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let N = Number(require("fs").readFileSync(filePath));

let cnt = 0;

while (N > 0) {
  if (N >= 3) {
    N -= 3;
  } else {
    N -= 1;
  }
  cnt++;
}

console.log(cnt % 2 !== 0 ? "SK" : "CY");