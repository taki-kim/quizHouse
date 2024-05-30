const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dic = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const answer = [];
const arr = [];

for (let i = N; i <= M; i++) {
  let str = "";
  if (i < 10) {
    str += dic[i];
  } else {
    let [x, y] = i.toString().split("");
    str += dic[x] + " " + dic[y];
  }
  arr.push([i, str]);
}

arr.sort((a, b) => {
  if (a[1] < b[1]) {
    return -1;
  } else if (a[1] > b[1]) {
    return 1;
  } else {
    return 0;
  }
});

arr.forEach((e) => {
  answer.push(e[0]);
});

for (let i = 0; i <= answer.length; i += 10) {
  console.log(
    answer
      .slice(i, i + 10)
      .join(" ")
      .trim()
  );
}