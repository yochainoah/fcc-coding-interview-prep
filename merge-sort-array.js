var merge = function(nums1, m, nums2, n) {
    const mergedArray = [];
    for(let i = 0;i<nums1.length-n; i++){
        if(nums1[i]>=nums2[i]){
            mergedArray.push(nums2[i]);
            mergedArray.push(nums1[i]);
        }
        else if(nums1[i] < nums2[i]){
            mergedArray.push(nums1[i]);
            mergedArray.push(nums2[i]);
        }
    }
    return mergedArray;
};
console.log(merge([1,2,3,0,0,0],3,nums2 = [2,5,6],3))