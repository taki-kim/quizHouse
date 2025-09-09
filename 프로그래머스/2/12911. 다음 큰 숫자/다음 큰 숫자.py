# 2진수 안에 들어있는 1의 개수
def numsOf1(n):
    return bin(n).count('1')

def solution(n):
    comparison = numsOf1(n)
    answer = 0
    target = n+1
    
    while True:
        if(comparison == numsOf1(target)):
            answer = target
            break
        else:
            target += 1
    
    return answer
        
        