function solution(elements) {
    let answer = new Set();
    
    for(let i = 0; i < elements.length; i++){
        
        let arr = [...elements];
        let t = i
        
        while(t>0){
            let x = arr.shift();
            arr.push(x);
            t--;
        }
        
        let sum =0;
        
        for(let j =0; j < arr.length; j++){
            sum += arr[j]
            answer.add(sum);
        }
        
        
    }
    
    return [...answer].length
}