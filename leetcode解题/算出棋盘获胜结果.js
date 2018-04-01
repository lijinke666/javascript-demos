/**
 * @name 倍发科技-程序面试
 * @description 2018/3/10
 * @author Jinke.Li (1359518268@qq.com)
 */
const players = {
    player1: "x",
    player2: "o"
}

/**
 * @return { [当前棋子]: [x坐标,y坐标] }
 */
const getCoordinate = (checkerboard = []) => {
    //x,y 坐标
    const [x, y] = [[], []]
    //对角线
    const [cha1, cha2] = [[], []]

    for (let [i, v] of checkerboard.entries()) {
        x.push(
            v.map((item, index) => ({ [item]: [i, index] }))
        )
        cha1.push(
            {
                [v[v.length - i - 1]]: [i, v.length - i - 1]
            }
        )
        cha2.push(
            {
                [v[i]]: [i, i]
            }
        )
        y.push(checkerboard.map((item, idx) => ({ [item[i]]: [idx, i] })))
    }

    return [...x, ...y, cha1, cha2]
}

const filterBoardCoordinate = (board) => (players) => (player) => {
    return board.filter(item =>
        !(
            item
                .map(v => Object.keys(v)[0])
                .includes(
                    Object.values(players).filter(_player => _player !== player)[0]
                )
        )
    )
}

const getResult = (checkerboard) => (player) => {
    return checkerboard
    .reduce((arr, v) => {
        const self = v.map(t => Object.keys(t)[0]).filter(v => v === player)
        if (self.length === 2) {
            const currentKey = v.map(t => Object.keys(t)[0]).filter(v => v !== player)
            arr.push(
                v.map(o => o[currentKey]).filter(v => v)
            )
        }
        return arr
    }, [])
    .map( v=> v[0])
}

const getWingResult = (player = players.player1) => (checkerboard = defaultCheckerboard) => {

    //获取所有旗子坐标
    const checkerboardCoordinate = getCoordinate(checkerboard)

    //所有的可能性 排除已有 另一个玩家落子的情况
    const all = filterBoardCoordinate(
        getCoordinate(checkerboard)
    )(players)(player)

    const result = getResult(all)(player)
    return result
}


module.exports = {
    players,
    getWingResult
}
