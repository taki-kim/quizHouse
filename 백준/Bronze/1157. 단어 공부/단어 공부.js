const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

let string = require("fs").readFileSync(filePath).toString().trim();

string = string.split("").map((e) => e.toUpperCase());

let myMap = new Map();

for (let i = 0; i < string.length; i++) {
  if (!myMap.has(string[i])) {
    myMap.set(string[i], 1);
  } else {
    myMap.set(string[i], myMap.get(string[i]) + 1);
  }
}

const arr = [...myMap].sort((a, b) => b[1] - a[1]);

if (arr.length <= 1) {
  console.log(arr[0][0]);
} else {
  if (arr[0][1] === arr[1][1]) console.log("?");
  else console.log(arr[0][0]);
}