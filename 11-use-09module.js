

//使用09-moduleExports-Exports.js输出的多个函数

//引入09模块(是个对象，里面有多个函数)
var manyFn = require('./09-moduleExports-Exports');


//注释09模块中的某一种方式，看另一种的输出


//输出引入的模块
console.log(manyFn)
manyFn.hello();
manyFn.greet('wangxin');