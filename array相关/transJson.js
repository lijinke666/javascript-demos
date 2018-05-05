const json = [
  {
    qid: "1",
    enable: "Y",
    question: "小明几岁了",
    totalPrizePool: "100",
    startTime: "2018/5/10 14:10",
    endTime: "2018/5/10 15:10",
    showTime: "2018/5/10 15:10",
    answerA: "1",
    answerB: "2",
    answerC: "3",
    answerD: "4",
    answer: "A"
  },
  {
    qid: "2",
    enable: "N",
    question: "今天是不是下雨",
    totalPrizePool: "100",
    startTime: "2018/5/10 10:00",
    endTime: "2018/5/10 22:00",
    showTime: "2018/5/11 8:00",
    answerA: "2",
    answerB: "3",
    answerC: "4",
    answer: "B"
  },
  {
    qid: "3",
    enable: "Y",
    question: "小红几岁了",
    totalPrizePool: "100",
    startTime: "2018/5/10 10:00",
    endTime: "2018/5/10 22:00",
    showTime: "2018/5/11 8:00",
    answerA: "4",
    answerB: "2",
    answerC: "3",
    answer: "C"
  }
];

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
        .filter(v => v.startsWith("answer"))
        .map(v => ({ option: v, des: "" }));
      const v = {
        qid,
        enable,
        question,
        totalPrizePool,
        startTime,
        endTime,
        showTime,
        answers: _answers,
        answer
      };
      arr.push(v);
      return arr;
    },
    []
  );
  return result;
};

console.log(transJson(json));
