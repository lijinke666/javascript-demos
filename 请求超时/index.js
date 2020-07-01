const request = (url) => {
  return fetch(url).then((res)=> res.json()).then((data)=>{
    console.log(data);
  }).catch((err)=>{
    console.log('error', err);
  })
}

request('https://wwww.lijinke.cn/api/article')