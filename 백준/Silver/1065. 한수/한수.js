const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(filePath).toString().trim();

let result = 0;

for (let i = 1; i <= input; i++) {
  // 1~ 99 까지는 하나씩 카운트
  if (i <= 99) result++;
  //100부터는 검증
  if (i > 99) {
    let numbers = i.toString().split("").map(Number);
    let x = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (j === 0) continue;
      if (j === 1) x = numbers[j] - numbers[j - 1];
      if (j > 1) {
        let x2 = numbers[j] - numbers[j - 1];
        if (x === x2) x = x2;
        if (x !== x2) {
          x = 999;
          break;
        }
      }
    }
    if (x !== 999) result++;
  }
}

console.log(result);
