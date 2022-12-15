var repeatedNTimes = function(nums) {
    const result = {};
    nums.forEach((x) => { 
      result[x] = (result[x] || 0)+1; 
    });

    // if(result[x])	{
    //     result[x] = result[x] + 1;
    // }else {
    //     result[x] = 0 + 1;
    // }
    console.log(result)



// 
    // let count =0;
    // let c =0;
    // for(let i =0; i<nums.length; i++){
    //     const a = nums[i];
    //     for(let j=i+1; j<nums.length; j++){
    //         if(a === nums[j]){
    //             count++;
    //         } c=count;
    //     }count =0;
    // }console.log(c)
};repeatedNTimes([4,1,2,3,3,4,4,4]);