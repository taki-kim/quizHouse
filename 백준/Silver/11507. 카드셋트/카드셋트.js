const input = require("fs").readFileSync(0, "utf8").toString().trim();
const arr = [];

let greska = false;
let answer = [];

for (let i = 0; i < input.length; i += 3) {
  let str = input.slice(i, i + 3);
  arr.push(str);
}

arr.sort();

const myMap = new Map();
const myCard = new Map();
myCard.set("P", 13);
myCard.set("K", 13);
myCard.set("H", 13);
myCard.set("T", 13);

arr.forEach((e, i) => {
  let card = e[0];
  let cardNum = e[1] + e[2];
  if (myMap.get(card) === +cardNum) {
    greska = true;
  } else {
    myMap.set(card, +cardNum);
    myCard.set(card, myCard.get(card) - 1);
  }
});

[...myCard].forEach((e) => {
  answer.push(e[1]);
});

greska ? console.log("GRESKA") : console.log(answer.join(" ").trim());