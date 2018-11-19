/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 找到 一个 数组中 第 n 大 的 数
 * 先倒序排序 取 第 n - 1 下标
 */
const findKthLargest = (nums, k) => {
    const _k = Math.max(Math.min(nums.length, k), 1)
    return nums.sort((n1,n2)=> n2 - n1)[_k - 1]
};

findKthLargest([3,2,1,5,6,4], 2)   // 5
