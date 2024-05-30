/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const numSet = new Set(nums);
    let max = 0;
    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let len = 1;
            let aft = num + 1;
            while (numSet.has(aft++)) {
                len++
            }
            max = Math.max(max, len)
        }
    }
    return max
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    for(;j<nums.length;j++){
        nums[j]=0;
    }
};

let nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums)