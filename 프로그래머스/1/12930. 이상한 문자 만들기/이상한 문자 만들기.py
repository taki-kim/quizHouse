def solution(s):
    answer = ''
    arr = s.split(" ")
    
    print(arr)
    
    for str in arr:
        if (str == ""):
            answer += " "
        else:
            for i in range(len(str)):
                if(i%2 == 0):
                    answer += str[i].upper()
                else:
                    answer += str[i].lower()
                if(i+1 == len(str)):
                    answer += " "

    return answer[0:len(answer)-1]