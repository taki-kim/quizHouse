function solution(food) {
    let answer = "";
    
    for(let i = 1; i < food.length; i++){
        while(food[i]>=2){
            answer = answer + i;
            food[i] = food[i] - 2;
        }
    }
    
    let reverse = answer.split("").sort((a,b)=>b-a).join("");
    
    answer += "0" + reverse;
    
    return answer;
    
}