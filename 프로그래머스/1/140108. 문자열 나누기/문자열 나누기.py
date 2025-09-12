def solution(s):
    answer = 0
    string = ""
    start = ""
    count01 = 0
    count02 = 0
    
    for ch in s:
        if(string == ""):
            start = ch
        
        
        if(start == ch):
            count01 += 1
            string += ch
        if(start != ch):
            count02 += 1
            string += ch
            
        if(count01 == count02):
            answer += 1
            string = ""
            count01 = 0
            count02 = 0
            start = ""
     
    if(string != ""):
        answer += 1
        
    return answer