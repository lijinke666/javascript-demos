/**
 * 
 * @param {String} source 源字符串 
 * @param {String} target 目标字符串
 * 给出source = "ADOBECODEBANC"，target = "ABC" 满足要求的解  "BANC" 
 * TODO
 */
const minWindow = function (source, target) {
    let index1 = []
    for (let str2 of source) {
        for (let str1 of target) {

            if (str2 === str1) {
                index1.push(source.indexOf(str1))
            }
        }
    }



    return index1
}


const source = "ADOBECODEBANC"
const target = "ABC"
const result = minWindow(source, target)

console.log(result);