//常用的场景

const obj = {
    id: 1,
    name: "lijinke"
}

const str = JSON.stringify(obj)
console.log(str);  //{"id":1,"name":"lijinke"}


//第三个字符串  间隔字符串

const str2 = JSON.stringify(obj, undefined, 2)

/**
 * 
 * {
  "id": 1,
  "name": "lijinke"
}
 * */
console.log(str2);
console.log(JSON.stringify(obj, undefined, "666"));
/**
 * {
    666"id": 1,
    666"name": "lijinke"
    }
 */


const str3 = JSON.stringify(obj, (key,value) => {
    return  (typeof value === "string") ?  value.toUpperCase() : value
},2)

console.log(str3);

/** 
 * {
  "id": 1,
  "name": "LIJINKE"
}
*/