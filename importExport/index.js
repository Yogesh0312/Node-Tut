const add1 = require("./oper");
// const multiOper = require('./multiOper')
const { add, sub, name } = require("./multiOper");

console.log(add1(5, 0));

// console.log(multiOper)
// console.log(multiOper.add(5,5))
// console.log(multiOper.sub(5,5))

console.log(add(5, 5));
console.log(sub(20, 5));
console.log(name);
