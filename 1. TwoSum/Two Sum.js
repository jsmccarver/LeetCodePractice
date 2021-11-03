/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var temp = 0;
    var temp_value = nums.length;
    for(var i = nums.length; i >= 0; i-- ){
        temp = nums[i];
        temp_value = temp_value - 1;
       
        for(var x = temp_value; x >= 0; x-- ){
            if((temp + nums[x]) == target){
                return([i, x]);
            }
            
        }
        
    }
    
    return 
};
