function solution(num_list) {
    var answer = 0;
    
    num_list.forEach((number)=>{
        let x = number;
        while(x !== 1){
            if(x % 2 === 0){
                x /= 2;
                answer ++;
            }else{
                x = (x-1)/2;
                answer ++;
            }
        }
    })
    
    return answer;
}