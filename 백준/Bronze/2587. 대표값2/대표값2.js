const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim().split("\n");

let mode = 0, total = 0;

for(let i = 0; i < input.length; i++){
	total += Number(input[i]);
}

const forSort = input.sort((a, b) => a - b);
mode = Math.floor(input.length / 2);
console.log(total / input.length);
console.log(forSort[mode]);