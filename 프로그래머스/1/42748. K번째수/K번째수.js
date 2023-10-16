function solution(array, commands) {
    var answer = [];
    commands.forEach((e)=>{
        let [i,j,k] = e;
        let arr = array.slice(i-1,j).sort((a,b)=>a-b);
        answer.push(arr[k-1]);
    })
    return answer;
}