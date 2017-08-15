const testJSon = {
    "buyIn": 300,
    "createTime": 11111111,
    "createUserId": "58f44f0f1cff00c26e978b7f",
    "createUserName": "test",
    "rewards": [
        {
            "id": 143,
            "rewardIndex": 4,
            "chip": 20000,
            "diamond": 0,
            "des": "",
            "masterScore": 2,
            "rewardPrizes": [{
                "prizeId": 10,
                "prizeNum": 1,
                "prizeName": "音响",
                "prizeIcon": "http://192.168.2.154:8087/image/prize/fKIk2QLUkK4OIBS3IdDn-mun.jpg",
                "prizeType": 0,
                "tempId": 0,
                "validTime": 0
            }]
        },
        {
            "id": 144,
            "rewardIndex": 4,
            "chip": 20000,
            "diamond": 0,
            "des": "",
            "masterScore": 2,
            "rewardPrizes": []
        }
    ]
}


testJSon['rewards'].forEach((reward, i) =>{
        const {rewardPrizes} = reward
        testJSon[`rewards${i}`] = reward
        // //转换实物奖品
        if(rewardPrizes.length>=1){
            rewardPrizes.forEach((v,i)=>{
                let _rewardPrize = JSON.parse(
                    JSON.stringify(v,undefined,2).replace(/prize/img,"obj")
                )
                testJSon[`rewards${i}`]['objs'] = _rewardPrize
            })
        }
        delete testJSon[`rewards${i}`]['rewardPrizes']
        
} )
delete testJSon['rewards']




console.log(
    JSON.stringify(testJSon, undefined, 2)
        .replace(/(,(?=\s*)|:(?=\s*{))/img, "")
        .replace(/"(\w*)"(\s?:\s*.*)/img, "$1$2")
        .replace(/"(rewards)\d*"/img, "$1")
        .replace(/"(objs)\d*"/img, "$1")
                // .replace(/([A-Z]*)\s*:\s*.*/g, (a, b, c) => `_${a.toLocaleLowerCase()}`)
)

 var a = {
     userName:"http://192.168.2.154:8087/image/obj/fKIk2QLUkK4OIBS3IdDn-mun.jpg"
}
 console.log(JSON.stringify(a,undefined,2).replace(/([A-Z])\s*:\s*.*/gm,(a)=> `_${a.toLocaleLowerCase()}`)); 