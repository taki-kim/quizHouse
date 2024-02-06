function solution(n) {
    let answer = 0;
    let arr = Array(n+1).fill(true).fill(false,0,2);
    
    for (let i = 2; i <= n; i++){
        if(arr[i]){
            answer ++;
            
            for(let j = i + i; j <= n; j += i){
                arr[j]= false;
            }
        }
    }
    
    
    return answer;
}