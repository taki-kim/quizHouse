def solution(n):
    answer = list(str(n))
    answer.sort(reverse=True)
    result = "".join(answer)
    return int(result)