/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // ek v zero aaya wo khud hi line by line aaapko change karna hoga
    // agar ek b zero aaya sare aage ayege
    // bus hame aage karna hai 
    let p1=0;

    for(let i=0;i<nums.length;i++){
       if(nums[i]!=0){
            nums[p1]=nums[i];
            p1+=1;
        }
    }

    for(let i=p1;i<nums.length;i++){
        nums[i]=0;
    }



    
};