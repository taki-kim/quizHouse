const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const result = Array(alphabet.length).fill(-1);

alphabet.forEach((e, i1) => {
  for (let i2 = 0; i2 < input.length; i2++) {
    if (input[i2] === e) {
      result[i1] = i2;
      break;
    }
  }
});

console.log(result.join(" "));
