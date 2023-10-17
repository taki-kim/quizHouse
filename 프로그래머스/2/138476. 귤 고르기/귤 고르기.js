function solution(k, tan) {
    let answer = [];
    let x = 0;
    let arr = [];
    tan.sort((a,b)=>a-b);
    
    tan.forEach((e,i)=>{
        if(i === 0){
            x = 1;
        }else if(tan[i-1] === e){
            x++;
        }else if(tan[i-1] !== e){
            arr.push(x);
            x = 1;
        }
        
        if(tan.length -1 ===i){
            arr.push(x)
        }
    })
    
    arr.sort((a,b)=>b-a);
    
    let count = 0;
    
    arr.forEach((e,i)=>{
        if(count < k){
            count += e;
            answer.push(e);
        }
    })
    
   return answer.length;
}

