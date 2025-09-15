def solution(x, n):
    answer = []
    cur = x
    for i in range(n):
        answer.append(cur);
        cur += x
    return answer