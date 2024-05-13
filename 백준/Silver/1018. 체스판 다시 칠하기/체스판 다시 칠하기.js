const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [col, row] = input.shift().split(" ").map(Number);

let whiteBoard = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

let blackBoard = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const answer = [];

const startWhite = (startCol, startRow) => {
  let count = 0;

  for (let curCol = startCol; curCol < 8 + startCol; curCol++) {
    for (let curRow = startRow; curRow < 8 + startRow; curRow++) {
      if (
        whiteBoard[curCol - startCol][curRow - startRow] !==
        input[curCol][curRow]
      )
        count++;
    }
  }
  return count;
};

const startBlack = (startCol, startRow) => {
  let count = 0;

  for (let curCol = startCol; curCol < 8 + startCol; curCol++) {
    for (let curRow = startRow; curRow < 8 + startRow; curRow++) {
      if (
        blackBoard[curCol - startCol][curRow - startRow] !==
        input[curCol][curRow]
      )
        count++;
    }
  }
  return count;
};

for (let i = 0; i < col - 7; i++) {
  for (let j = 0; j < row - 7; j++) {
    answer.push(startWhite(i, j));
    answer.push(startBlack(i, j));
  }
}

answer.sort((a, b) => a - b);

console.log(answer[0]);