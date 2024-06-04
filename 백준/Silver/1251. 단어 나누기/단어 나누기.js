const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

let result = "";

for (let x = 1; x <= input.length - 2; x++) {
  for (let y = x + 1; y <= input.length - 1; y++) {
    let head = input.slice(0, x).split("").reverse().join("");
    let mid = input.slice(x, y).split("").reverse().join("");
    let tail = input.slice(y).split("").reverse().join("");

    let cur = head + mid + tail;

    if (!result) {
      result = cur;
    } else {
      if (result > cur) result = cur;
    }
  }
}

console.log(result);