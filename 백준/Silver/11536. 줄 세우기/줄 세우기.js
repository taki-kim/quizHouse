const input = require("fs")
  .readFileSync(0, 'utf-8')
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let checker = 0;

for (let i = 0; i < input.length; i++) {
  if (i === 0) continue;
  if (input[i - 1] < input[i]) {
    checker++;
  } else if (input[i - 1] > input[i]) {
    checker--;
  }
}

if (checker === -(N - 1)) {
  console.log("DECREASING");
} else if (checker === N - 1) {
  console.log("INCREASING");
} else {
  console.log("NEITHER");
}