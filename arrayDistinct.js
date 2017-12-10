function arrayDistinct(targetArray) {
    if(targetArray.some((item)=> Object.is(typeof item,"object"))){
        return targetArray
        .map((item) => JSON.stringify(item))
        .filter((item, idx, arry) => idx === arry.findIndex( (current)=> current === item))
        .map((item) => JSON.parse(item))
    }
    return [...new Set(targetArray)]
}

const testArray = [
    {id:1,name:"react"},
    {id:2,name:"vue"},
    {id:3,name:"angular"},
    {id:1,name:"react"},
    {id:2,name:"graphql"},
]


console.log(arrayDistinct(testArray));  
console.log(arrayDistinct([1,2,3]));
console.log(arrayDistinct([[1,2],[1,2]]));
