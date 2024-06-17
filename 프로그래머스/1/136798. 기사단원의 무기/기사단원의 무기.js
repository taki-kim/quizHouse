function solution(number, limit, power) {
  let arr = [];

  
    for(let i = 1; i <= number; i++){
        let count = 0;
        for (j = 1; j<=Math.sqrt(i); j++){
            if(i%j == 0){
                if(j * j === i) count ++;
                else count += 2;
            }
        }
        
        count > limit ? arr.push(power) : arr.push(count);
    }
    
    return arr.reduce((acc,cur)=>{return acc+cur;},0)
}