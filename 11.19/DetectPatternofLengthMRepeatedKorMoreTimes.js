var containsPattern = function(arr, m, k) {
    let count = 0;
    for (let i = 0, j = m; i < arr.length - m; i++, j++) {
        if (arr[i] === arr[j]) {
            count++;
            console.log(arr[i]+"------ii")
            console.log(arr[j]+"------j")
        } else {
            count = 0;
        }
        
        if (count === m * (k - 1)) {
            console.log(count+"-----count")
            return true;
        }
    }
    console.log(count+"-----count")
    return false;
}













    // let temp =[];
    // for(let i =0; i<arr.length; i++){
    //     for(let j =1; j<arr.length; j++){
    //         if(arr[i][j] == arr[j][i]){
    //             temp =1;
    //         }else{
    //             break;
    //         }
    //     }
    //     console.log(temp)
        
    
    // }
    // return true
    // console.log(arr+"-----arr")
    // console.log(m+"-----m")
    // console.log(k+"-----k")
;containsPattern([1,2,1,2,1,1,1,3],2,2)

//arr의 배열값 비교, m의 숫자만큼 묶어서, k번 만큼 반복되는지 확인하고, 맞으면 true, 아니면 false