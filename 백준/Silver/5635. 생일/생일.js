const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const students = [];

for (let i = 0; i < N; i++) {
  let [name, dd, mm, yyyy] = input[i].split(" ");
  if (dd.length < 2) dd = "0" + dd;
  if (mm.length < 2) mm = "0" + mm;

  const date = parseInt(yyyy + mm + dd);

  students.push([name, date]);
}

students.sort((a, b) => b[1] - a[1]);

console.log(students[0][0]);
console.log(students[N - 1][0]);