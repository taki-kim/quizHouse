function solution(brown, yellow) {
    let answer = [];
    const width = brown + yellow;
    
    for(let i = 3; i < width; i++){
        if(width % i == 0){
            let j = width/i;
            if(i*2 + j*2 - 4 == brown){
                answer.push(i);
                answer.push(j)
                break;
            }
        }else{
            continue;
        }
    }
    return answer.sort((a,b)=>b-a);
}