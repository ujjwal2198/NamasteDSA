/**
 with no extra scnerios 
 */
var merge = function(nums1, m, nums2, n) {
    // now lets do same without having extra array 
    let p1=m-1;
    let p2=n-1;
    for(let i=(m+n-1);i>=0;i--){
        if(nums1[p1]>nums2[p2] || p2<0){
            nums1[i]=nums1[p1];
            p1-=1;
        }else if(nums2[p2]>=nums1[p1] || p1<0){
            nums1[i]=nums2[p2];
            p2-=1;
        }
    }
};