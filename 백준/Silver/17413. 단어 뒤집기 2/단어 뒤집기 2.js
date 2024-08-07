const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

let arr = [];

const stack = [];

let bracketWord = "";
let str = "";

let bracketSwitch = false;

const reverseStr = (str) => {
  return [...str].reverse().join("");
};

for (let i = 0; i < input.length; i++) {
  if (input[i] === "<") {
    if (str) stack.push(reverseStr(str));
    str = "";
    bracketSwitch = true;
  }
  if (input[i] === ">") {
    bracketWord += input[i];
    stack.push(bracketWord);
    bracketWord = "";
    bracketSwitch = false;
    continue;
  }

  if (bracketSwitch) {
    bracketWord += input[i];
  }

  if (!bracketSwitch) {
    if (input[i] === " ") {
      stack.push(reverseStr(str));
      stack.push(input[i]);
      str = "";
    } else {
      str += input[i];
    }
  }
}

if (str) stack.push(reverseStr(str));

console.log(stack.join(""));