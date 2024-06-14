function solution(par, com) {
    let myMap = new Map();
    for(let i = 0; i < par.length; i++){
        myMap.set(par[i], myMap.has(par[i]) ? myMap.get(par[i])+1 : 1);
    }
    for(let i =0; i <com.length; i++){
       myMap.set(com[i], myMap.get(com[i]) - 1);
    }
    return [...myMap].sort((a,b) => b[1] - a[1])[0][0]
}