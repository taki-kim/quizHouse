const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const reverseString = (item) => {
  return item.split("").reverse().join("");
};

const [A, B] = input.map((e) => Number(reverseString(e)));

if (A > B) console.log(A);
else console.log(B);
