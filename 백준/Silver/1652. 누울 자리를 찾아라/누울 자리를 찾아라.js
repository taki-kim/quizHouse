const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = +input.shift();

let seatX = 0;
let seatY = 0;

let emptySpaces = [];

for (let x = 0; x < N; x++) {
  let count = 0;
  for (let y = 0; y < N; y++) {
    if (input[x][y] === ".") {
      count++;
      if (y === N - 1) {
        emptySpaces.push(count);
      }
    }
    if (input[x][y] === "X") {
      if (count === 0) continue;
      emptySpaces.push(count);
      count = 0;
    }
  }
}

emptySpaces.forEach((e) => {
  e >= 2 ? seatX++ : null;
});

emptySpaces = [];

for (let x = 0; x < N; x++) {
  let count = 0;
  for (let y = 0; y < N; y++) {
    if (input[y][x] === ".") {
      count++;
      if (y === N - 1) {
        emptySpaces.push(count);
      }
    }
    if (input[y][x] === "X") {
      if (count === 0) continue;
      emptySpaces.push(count);
      count = 0;
    }
  }
}

emptySpaces.forEach((e) => {
  e >= 2 ? seatY++ : null;
});

console.log(`${seatX} ${seatY}`);