function solution(n, computers) {
  const visited = Array(n).fill(0);
  let answer = 0;

  const bfs = (start) => {
    visited[start] = 1;
    const queue = [start];

    while (queue.length) {
      const node = queue.shift();
      for (let i = 0; i < n; i++) {
        if (computers[node][i] && !visited[i]) {
          queue.push(i);
          visited[i] = 1;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
    }
  }

  return answer;
}