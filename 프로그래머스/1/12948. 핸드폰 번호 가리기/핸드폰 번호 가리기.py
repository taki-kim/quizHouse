def solution(phone_number):
    answer = ''
    hideIndex = len(phone_number)-4
    
    for i in range(len(phone_number)):
        if(i < hideIndex):
            answer += '*'
        else:
            answer+=phone_number[i]
        
    return answer