def solution(number):
    answer = 0
    for x in range(len(number)):
        for y in range(x+1, len(number)):
            for z in range(y+1, len(number)):
                if((number[x] + number[y] + number[z])==0):
                    answer+=1
    return answer