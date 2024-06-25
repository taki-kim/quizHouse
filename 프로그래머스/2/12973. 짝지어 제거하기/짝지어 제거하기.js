function solution(s)
{
    let arr = [];
    let answer = -1;
    let cur = "";
    let next = "";

   for(let i = 0; i < s.length; i++){
       if(!cur && !next){
           cur = s[i];
           arr.push(cur);
       }else if(cur && !next){
           next = s[i];
       }

       if(cur && next){
           if(cur == next){
               if(arr.length) arr.pop();
               if(arr.length){
                 cur = arr[arr.length-1]  
               } else{ cur = ""}
               
               next = "";
           }else{
               cur = s[i];
               arr.push(cur);
               next = "";
           }
       }

   }

    
    return arr.length ? 0 : 1;
}