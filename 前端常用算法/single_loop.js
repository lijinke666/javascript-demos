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


const teams = ['湖人', '火箭', '凯尔特人']
//轮次 队伍-1
const loopLength = teams.length - 1
//i=1  第一个队伍不动 逆时针循环

const loopSort = (teams,loopLength, teamSize = 2) => {
    let temp = 0
    const result = []
    const len = teams.length
    const isOdd = !(len % 2 === 0)
    //如果是奇数队
    if(isOdd){
        teams.push('无对手')
    }
    for (let k = 1; k <= loopLength; k++) {
        for (let i = 1; i < len; i++) {
            for (let j = 0; j <= len - j; j++) {
                temp = teams[j]
                teams[j] = teams[j + 1]
                teams[j + 1] = temp
            }
        }
        const currentTeams =  Array.from({ length: Math.ceil(len / teamSize) }, (v, index) => {
            return teams.slice(index * teamSize, index * teamSize + teamSize)
        })
        result.push(...currentTeams)

        // console.log(currentTeams);
    }
    return result
}


const result = loopSort(teams,loopLength,2)

console.log(result);

