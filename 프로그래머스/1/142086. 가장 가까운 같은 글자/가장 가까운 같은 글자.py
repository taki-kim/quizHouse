def solution(s):
    answer = []
    stack = []
    for ch in s:
        if(len(stack)==0):
            answer.append(-1)
        else:
            result = -1
            for i,target in enumerate(reversed(stack)):
                if(target == ch):
                    result = i + 1
                    break
            answer.append(result)   
        stack.append(ch)
        
    return answer