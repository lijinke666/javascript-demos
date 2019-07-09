/**
 * @name 洗牌算法
 */

const shuffle = (teams = []) => {
  for (let i = teams.length - 1; i >= 0; i--) {
    const randomIdx = Math.floor(Math.random() * (i + 1));
    const itemIdx = teams[randomIdx];
    teams[randomIdx] = teams[i];
    teams[i] = itemIdx;
  }
  return teams;
};

console.log(shuffle([1, 2, 3, 4, 5, 6]));
