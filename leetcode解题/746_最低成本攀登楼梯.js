/**
 * 注意：
 * cost将有一个在该范围内的长度[2, 1000]。
 * 每个cost[i]将会是范围内的一个整数[0, 999]。
 * 第一步可以从 下标为0 或者 1 开始
 * @param {number []} cost 成本
 * @return {number} 
 */
const minCostClimbingStairs = (cost) =>{
    if(!Array.isArray(cost) || cost.length <2 || cost.length > 1000){
        throw new Error('cost between [2,1000]')
    }
    if( cost.some( v => !Object.is(typeof (v),'number') || v <0 || v>999 ) ){
        throw new Error('const[i] should between [0,999] and should be a number')
    }

    let num1 = 0
    let num2 = 0

    for(let i = cost.length-1; i>=0; --i){
        let num0 = cost[i] + Math.min(num1,num2)
        num2 = num1
        num1 = num0
    }
    return Math.min(num1,num2)
}

console.log(minCostClimbingStairs([10,15,20]))       //15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))   //6