/**
 * 给定一个整数数组，返回两个数字的索引，使它们加起来成为一个特定的目标。
 * 您可能会认为每个输入都只有一个解决方案，而且您可能不会使用相同的元素两次。
 * @param {number} nums  两个数字的总和 
 * @param {number[]} target  目标数组
 */
const twoSum = (nums, target) =>{
    let index1 = 0
    let index2 = 0

    for(let [i,v] of target.entries()){
        for(let [k,j] of target.entries()){
            if(v + j === nums){
                index1 = i
                index2 = k
                break
            }
        }
    }
    if(index1 == 0 && index2 ==0){
        throw new Error('未找到解决')
    }
    return [index1,index2]  
};

console.log(twoSum(9,[2,7,11,15])); 
console.log(twoSum(3,[4,5,1,2])); 
console.log(twoSum(10,[2,3,8,7])); 