var isSameTree = function(p, q) {
    let count =0;
    console.log(p.length)
    for(i=0;i<p.length; i++){
        console.log(p[i])
        if(p[i] ==q[i]){
            count++
            
        }
        console.log(count+"-----121")
        console.log(p.length+"======")
       
    }
    if(count === p.length){
        console.log("true")
    }else{     
        console.log("false")
    }
    
};isSameTree([1,2,3],[1,2,3])