/**
 * @name 单循环算法
 * @description  单循环赛制，是指所有参赛队在竞赛中均能相遇一次，最后按各队在竞赛中的得分多少、胜负场次来排列名次。 单循环一般在参赛队不太多，又有足够的竞赛时间才能采用。单循环由于参加竞赛的各队都有相遇比赛的机会， 是一种比较公平合理的比赛制度 [1]  。
 */



/** 
 * [1,2]
 * [1,3]
 * [1,4]
 * [2,3]
 * [2,4]
 * [3,4]
*/

//i=1  第一个队伍不动 逆时针循环

const loopSort = (teams) => {
    let temp = 0
    const result = []
    for (let i = 1; i < teams.length; i++) {
        for (let j = 0; j <= teams.length - j; j++) {
            temp = teams[j]
            teams[j] = teams[j + 1]
            teams[j + 1] = temp
            result.push([teams[j+1],teams[j]])
        }
    }
    return result
}

const teams = [1, 2, 3, 4]

const result = loopSort(teams)

console.log(result);
