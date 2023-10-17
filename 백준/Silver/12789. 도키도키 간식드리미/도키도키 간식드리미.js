const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

let arr = input[1].split(" ");
let s1 = [];
let s2 = [];
let passed = [];

for (let i = n - 1; i >= 0; i--) {
  s1.push(Number(arr[i]));
}

for (let i = 1; i <= n; i++) {
  do {
    let nextNum = passed.length ? passed[passed.length - 1] + 1 : 1;
    let s1Peek = s1[s1.length - 1];
    let s2Peek = s2[s2.length - 1];

    if (s1Peek === nextNum) {
      // 스택1 옮김
      let num = s1.pop();
      passed.push(num);
    } else if (s2Peek === nextNum) {
      // 스택2 옮김
      let num = s2.pop();
      passed.push(num);
    } else {
      // 스택1 => 스택2로
      let num = s1.pop();
      num ? s2.push(num) : null;
    }
  } while (s1.length);
}

if (passed.length === n) {
  console.log("Nice");
} else {
  console.log("Sad");
}
