const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const [F, S, G, U, D] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

const building = Array(F + 1).fill(0);
building[0] = 1;
const ds = [+U, -D];

const bfs = (start) => {
  const queue = [start];
  building[start] = 1;

  while (queue.length) {
    const curF = queue.shift();
    for (let i = 0; i < 2; i++) {
      const nextF = curF + ds[i];
      if (nextF >= 1 && nextF <= F && !building[nextF]) {
        building[nextF] = building[curF] + 1;
        queue.push(nextF);
      }
    }
  }
};

bfs(S);

console.log(building[G] ? building[G] - 1 : "use the stairs");