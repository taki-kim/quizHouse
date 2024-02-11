function solution(str_list, ex) {
    let arr = [];
    str_list.forEach((item)=>{
        if(!item.includes(ex)) arr.push(item);
    })
    return arr.join("");
}