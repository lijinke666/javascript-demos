
const fs = require('fs')
const path = require('path')
const input = 
JSON.parse(fs.readFileSync(path.resolve(__dirname,"./input.json")).toString())
/**
 * @name transJson
 * @param {Array} json 需要转换的数据
 */
const transJson = json => {
  const result = json.reduce(
    (
      arr,
      {
        qid,
        enable,
        question,
        totalPrizePool,
        startTime,
        endTime,
        showTime,
        answer,
        ...answers
      }
    ) => {
      const _answers = Object.keys(answers)
        .filter(v => v.toLocaleLowerCase().startsWith("answer"))
        .map(v => {
          const value = v.replace(/^(answer)(\w)/i,(a,b,c)=> `${b}|${c}`)
          const [des,option] = value.split('|') 
          return {option,des}
        });
        
      const v = {
        qid,
        enable,
        question,
        totalPrizePool,
        startTime:new Date(startTime),
        endTime: new Date(endTime),
        showTime: new Date(showTime),
        answers: _answers,
        answer
      };
      arr.push(v);
      return arr;
    },
    []
  );
  return JSON.stringify(result, undefined, 2)
};

console.log(transJson(input));
