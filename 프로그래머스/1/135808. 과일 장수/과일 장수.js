function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => a - b);
  let M = [];

  while (score.length) {
    let apple = score.pop();
    if (M.length < m) {
      M.push(apple);
    }
    if (M.length === m) {
     
      answer += M[m - 1] * m;
      M = [];
    }
  }
  return answer;
}