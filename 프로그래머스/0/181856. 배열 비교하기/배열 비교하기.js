function solution(arr1, arr2) {
    if(arr1.length > arr2.length ){
        return 1;
    }else if(arr1.length < arr2.length){
        return -1;
    }else{
        let sum1 = 0;
        let sum2 = 0;
        arr1.forEach((num)=>{ sum1 += num});
        arr2.forEach((num)=>{ sum2 += num});
        
        if (sum1 == sum2) {
            return 0;
        }else if (sum1 > sum2){
            return 1;
        }else{
            return -1;
        }
    }
}