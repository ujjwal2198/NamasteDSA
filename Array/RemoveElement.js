/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let notEqualToVal = 0;

    for(let i =0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[notEqualToVal] = nums[i];
            notEqualToVal+=1;
        }
    }
    return notEqualToVal;
};