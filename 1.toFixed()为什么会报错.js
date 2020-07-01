console.log(1.toFixed(2));

// SyntaxError: Invalid or unexpected token

// 上面之所以会报错 是因为 1 => 1.0 => 1. 在js里面都是可以的

console.log((1).toFixed(2)); // 1.00
console.log((1).toFixed(2)); // 1.00
console.log((1.0).toFixed(2)); // 1.00
