let result = "";

const mySet = new Set();

const selfNumberGenerator = (num) => {
  return num
    .split("")
    .map(Number)
    .reduce((acc, cur) => (acc += cur), Number(num));
};

for (let i = 1; i <= 10000; i++) {
  mySet.add(selfNumberGenerator(i.toString()));
}

for (let i = 1; i <= 10000; i++) {
  if (!mySet.has(i)) result += i + "\n";
}

console.log(result.trim());