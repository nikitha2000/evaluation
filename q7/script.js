function findTwoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return[i, j];
            }
        }
    }
}

nums=[2,5,4,1];
console.log(findTwoSum(nums, 3))