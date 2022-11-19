var singleNumber = function(nums) {
    if(nums.length>1){
       var c=nums[0];
       let temp =[];
        for(let i =0; i<nums.length; i++){
            if(c[i]==c[i+1]){
                console.log(c[i]+"aaaaa")
                temp +=c[i]
                console.log(temp)
            }else{
                break
            }
            console.log(temp+"----222temp")
            a =temp;
        }
    }else{
        console.log(nums[0])
        return nums[0]
    }

    // if(nums.length === 1)return nums[0]
    //     nums.sort();
    //     for(let i=0; i<nums.length-1; i++){
    //         if(nums[i] != nums[i+1]){
    //             console.log(nums[i])
    //             return nums[i]
    //         }
    //     }
    //     console.log(nums)
};singleNumber([2,1,3,1,3])