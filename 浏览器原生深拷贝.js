const original = {id: 0, prop: {name: "Tom"}}

/* Old hack */ 
const deepCopy = JSON.parse(JSON.stringify(original));

/* New way */
const deepCopy = structuredClone(original);
