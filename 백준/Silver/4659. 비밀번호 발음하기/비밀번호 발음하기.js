const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const vowels = ["a", "e", "i", "o", "u"];

const isUsable = (string) => {
  const arr = string.split("");
  let con01 = true; //모음포함
  let con02 = true; //모음 or 자음 연속 3개 이상
  let con03 = true; // 중복문자 2개 이상

  let isVowels = [];

  arr.forEach((e, i) => {
    if (vowels.indexOf(e) !== -1) {
      isVowels.push("v");
    } else {
      isVowels.push("c");
    }

    if (e !== "e" && e !== "o") {
      if (arr[i - 1] && arr[i - 1] === e) con03 = false;
    }
  });

  // condition01 처리
  if (isVowels.indexOf("v") == -1) con01 = false;

  // condition02 처리
  isVowels.forEach((e, i) => {
    if (
      isVowels[i - 2] &&
      isVowels[i - 1] &&
      isVowels[i - 2] == isVowels[i - 1] &&
      isVowels[i - 1] == e
    )
      con02 = false;
  });

  if (con01 && con02 && con03) return true;
};

let result = "";

input.forEach((e) => {
  if (e !== "end") {
    if (isUsable(e)) result += `<${e}> is acceptable.` + "\n";
    else result += `<${e}> is not acceptable.` + "\n";
  }
});

console.log(result.trim());