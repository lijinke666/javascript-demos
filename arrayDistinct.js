function arrayDistinct(targetArray) {
    if(!Array.isArray(targetArray)){
        return targetArray
    }
    if(targetArray.some((item)=> Object.is(typeof item,"object"))){
        return targetArray
        .map((item) => JSON.stringify(item))
        .filter((item, idx, arry) => idx === arry.findIndex( (current)=> current === item))
        .map((item) => JSON.parse(item))
    }
    return [...new Set(targetArray)]
}

const testDistinctArray = {
    object:{
        init: [
            {id:1,name:"react"},
            {id:1,name:"react"},
            ['node'],
            ['node']
        ],
        result:[
            {id:1,name:"react"},
            ['node'],
        ]
    },
    stringOrNumber:{
        init:["1","1",2,2],
        result:["1",2]
    }
}


console.log(arrayDistinct(testDistinctArray.object.init));  
