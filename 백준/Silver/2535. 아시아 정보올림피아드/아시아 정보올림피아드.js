const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const result = [];

const nations = new Set();
let info = [];

const N = +input.shift();

for (let i = 0; i < N; i++) {
  const [nation, stuNums, score] = input[i].split(" ").map(Number);
  const id = `${nation} ${stuNums}`;

  nations.add(nation); // 나라개수

  info.push([id, score]); // 표 정리
}

const medalsInNation = new Array(nations.size + 1).fill(0);
info = info.sort((a, b) => b[1] - a[1]);

for (let i = 0; i < N; i++) {
  const [nation, stuNums] = info[i][0].split(" ").map(Number);
  if (result.length === 3) break;
  if (medalsInNation[nation] < 2) {
    result.push(info[i][0]);
    medalsInNation[nation]++;
  }
}

console.log(result.join("\n").trim());