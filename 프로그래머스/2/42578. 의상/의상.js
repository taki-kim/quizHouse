function solution(clothes) {
    const myMap = new Map();
    
    let answer = 1;
    
    for(let i = 0; i < clothes.length; i++){
        if(myMap.has(clothes[i][1])){
            myMap.set(clothes[i][1], myMap.get(clothes[i][1]) + 1)
        }else{
            myMap.set(clothes[i][1], 1);
        }
    }
    
    for(let key of myMap){
        answer *= (key[1]+1)
    }
    
    return answer-1;
    
    
    
}