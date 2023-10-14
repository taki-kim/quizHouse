function solution(s) {
    let memo =[];
    s = [...s];
    
    let answer = s.map((e, i)=>{
        let result = -1;
        
        if(i == 0){
            memo.push(e);
            return result;
        }  
        
        for(let x = 0; x < memo.length; x++){
            if(memo[x] === e){
                result = i-x;
            }
        }
        
        memo.push(e);
        return result;
    })

    return answer;
}