/**
 * @param {number[]} nums
 * @return {number}
 */

 // non decreasing array = increasing  or equal are allowed
 // my job to remove duplicates from duplicate
 // find unique count
var removeDuplicates = function(nums) {
    // Approach
    // i can maintain the uniqueness at each index 
    // if it change same time i will increase counter 
    // at same place i will add unique number at unique index 

    let count = 1;
    let uniqueMaintain = nums[0];
    for(let i=0;i<nums.length;i++){
        if(uniqueMaintain != nums[i]){
            // that means new unique value came
            // so increase count
            
            // update new unique
            uniqueMaintain = nums[i];
            // update unique number at unique location
            nums[count]=uniqueMaintain;
            count+=1;
        }
    }
    return count;
};