const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString();

const string = ["pi", "ka", "chu"];

for (let i = 0; i < 3; i++) {
  input = input.split(string[i]).join(",").trim();
}

input = input.split(",").join("").trim();

input.length ? console.log("NO") : console.log("YES");
