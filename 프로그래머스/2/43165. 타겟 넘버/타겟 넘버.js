function solution(numbers, target) {
  let answer = 0;

  const dfs = (start, depth, acc) => {
    if (depth == numbers.length) {
      if (acc + numbers[depth - 1] === target) answer++;
      if (acc - numbers[depth - 1] === target) answer++;
      return;
    } else {
      for (let i = start + 1; i < numbers.length; i++) {
        dfs(i, depth + 1, acc + numbers[start]);
        dfs(i, depth + 1, acc - numbers[start]);
      }
    }
  };

  dfs(0, 1, 0);

  return answer;
}