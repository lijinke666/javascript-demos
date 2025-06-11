const sleep = (duration) =>
  new Promise((resolve) => setTimeout(() => resolve(duration), duration));

async function all(list) {
  return new Promise((res, rej) => {
    let count = 0;
    const result = [];

    list.forEach((item) => {
      Promise.resolve(item)
        .then((data) => {
          result.push(data);
          count++;

          if (count === list.length) {
            res(result);
          }
        })
        .catch(rej);
    });
  });
}

all([sleep(1000), sleep(2000), sleep(3000)]).then((res) => {
  console.log(res);
});
