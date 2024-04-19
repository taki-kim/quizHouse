const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const result = [];

input.forEach((e) => {
  const arr = e.split(" ").map(Number);
  let line = [];
  let count = 0;
  const testNum = arr.shift();

  for (let index = 0; index < arr.length; index++) {
    if (index === 0) {
      line.push(arr[index]);
    } else {
      if (arr[index] < line[line.length - 1]) {
        // 앞사람 보다 작을 때 수행

        for (let i = 0; i < line.length; i++) {
          if (arr[index] < line[i]) {
            if (i == 0) {
              count += line.length;
              line.unshift(arr[index]);
            } else {
              let head = line.slice(0, i);
              let tail = line.slice(i);
              line = [...head, arr[index], ...tail];
              count += tail.length;
            }
            break;
          }
        }
      } else {
        line.push(arr[index]);
      }
    }
  }

  result.push(`${testNum} ${count}`);
});

console.log(result.join("\n"));
