
// merging array with extra array 
// here we have extra arrray with us 

var merge = function(nums1, m, nums2, n) {
    let nums3=[];
    for(let i=0;i<m;i++){
        nums3[i] = nums1[i];
        // now this will have duplication of nums1[]
    }

    //okay we need to need to have 2 pointers because they will only 
    // control the flow of variables
    let p1 =0;
    let p2=0;
    // here we can have edge case also and that is element remaining in Array nums1 if other comparing array nums2 is empty and vice-versa
    
    for(let i=0;i<(m+n);i++){
        if((nums3[p1]<nums2[p2]) || (p2>=n)){
            nums1[i] = nums3[p1];
            p1+=1;
        }else if((nums3[p1]>=nums2[p2]) || (p1>=m)){
            nums1[i] = nums2[p2];
            p2+=1;
        }
    }


    
};