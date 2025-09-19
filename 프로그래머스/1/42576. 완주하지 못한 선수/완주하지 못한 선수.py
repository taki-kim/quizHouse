def solution(participant, completion):
    
    # 딕셔너리 초기화 O(n)
    myDic = {}
    for name in participant:
        if name in myDic:
            myDic[name] += 1
        else:
            myDic[name] = 1
         
    # 완주자 명단 순회하면서 참가자와 비교 O(n)
    for name in completion:
        if name in myDic:
            myDic[name] -= 1
        
    # 참가자 명단 순회하면서 발류값이 0이 아니면 완주못함
    
    answer = next(k for k,v in myDic.items() if v > 0)
    
    
    return answer