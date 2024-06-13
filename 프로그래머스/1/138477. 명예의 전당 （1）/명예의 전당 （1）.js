function solution(k, score) {
  const answer = [];
  let bucket = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      bucket.push(score[i]);
    } else {
      if (bucket[bucket.length - 1] < score[i]) {
        bucket.pop();
        bucket.push(score[i]);
      }
    }
    bucket.sort((a, b) => b - a);
    answer.push(bucket[bucket.length - 1]);
  }
  return answer;
}
