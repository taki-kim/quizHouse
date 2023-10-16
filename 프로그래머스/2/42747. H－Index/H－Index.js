function solution(citations) {
    let answer = 0;
    let length = citations.length;

    citations.sort((a,b)=>b-a);
    
    for(let i =0; i < length; i++){
        if(citations[i]>=i+1){
            answer++;
        }
    }
    
   
    return answer;
}