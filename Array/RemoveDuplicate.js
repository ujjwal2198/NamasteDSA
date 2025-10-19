/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    // using hashmap just to check if you can use same
    let hash = {};
    for(let i = 0;i<nums.length;i++){
        hash = hash ^ nums[i];
    }

    return hash;

  


};