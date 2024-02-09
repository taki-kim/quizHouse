function solution(num_list) {
    let answer = [];
    num_list.sort((a,b)=>a-b);
    num_list.map((item,index)=>{
    if(index < 5) answer.push(item)})
    return answer;
                 
                 
}