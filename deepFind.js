  const deepFind = () => {
    return 
      .filter(({ list }) => {
        return list.length >= 1
        && list.some(({ data }) => data.some(({ count }) => count >= 1))
      })
  }
  
  deepFind([{
    list:[]
  },{
    list:[{
      data: []
    }]
  },{
    list:[{
      data: [{
        count: 1
      }]
    }]
  }])
