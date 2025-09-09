def solution(n):
    answer = 0

    strs = list(map(int,str(n)))

    
    for i in strs:
        answer += i

    return answer