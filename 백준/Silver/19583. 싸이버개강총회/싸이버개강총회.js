const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const times = input[0]
  .split(" ")
  .map((time) => Number(time.split(":").join("")));

const myMap = new Map();

for (let i = 1; i < input.length; i++) {
  let [chatTime, name] = input[i].split(" ");
  chatTime = Number(chatTime.split(":").join(""));
  if (chatTime <= times[0] && chatTime <= times[2]) myMap.set(name, chatTime);
  if (myMap.has(name) && chatTime <= times[2]) myMap.set(name, chatTime);
}

for (let [name, chatTime] of myMap) {
  if (chatTime < times[1]) {
    myMap.delete(name);
  }
}

console.log(myMap.size);