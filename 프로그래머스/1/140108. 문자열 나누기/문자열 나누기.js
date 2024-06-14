function solution(s) {
    let xCount = 0;
    let chrCount = 0;
    let arr = [];
    let str ="";
    let x = "";
    
    for(let i =0; i<s.length; i++){
      if(x ===""){
          x = s[i];
          xCount++;
          str +=x;
      }else{
          if(s[i] !== x && xCount !== chrCount){
              str += s[i];
              chrCount++;
          }else if(s[i] === x && xCount !== chrCount){
              xCount++;
              str+= s[i];
          }else if(xCount === chrCount){
              arr.push(str);
              str = s[i];
              xCount = 1;
              chrCount = 0;
              x=s[i];
          }
      }
        if(i == s.length -1) arr.push(str)
    }
    return arr.length
}