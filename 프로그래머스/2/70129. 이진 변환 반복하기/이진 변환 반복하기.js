function solution(s) {
    let answer = [];
    
    const translator = (str, count0, attempt) => {
        str = str.split("").sort((a,b)=>b-a);
        
        for(let i =str.length-1; i>=0; i--){
            if(str[i] === "0"){
                str.pop();
                count0++;
            };
        }
        
        let base02 = str.length.toString(2);
        
        
        if(base02 == 1){
            answer = [attempt, count0]
        }else{
            translator(base02, count0, attempt+1);
        }
   }
    

    translator(s, 0, 1);
    
    return answer;
}
