function solution(n) {
    let answer = 0;
    let cur = 0;
    let next = 1;
    
    for(let i = 2; i <= n; i++){
        answer = (cur + next) % 1234567;
        cur = next;
        next = answer;
    }
    
    return answer;
}