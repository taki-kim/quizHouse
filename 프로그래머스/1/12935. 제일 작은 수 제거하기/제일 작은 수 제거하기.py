def solution(arr):
    smallest = min(arr)
    answer = []
    for num in arr :
        if(smallest != num):
            answer.append(num)
    
    if(len(answer) > 0):
        return answer
    else:
        return [-1]