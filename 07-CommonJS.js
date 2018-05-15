


//CommonJS规范
//06-use-module.js中的module.exports = ... ;      var .. = require(...);
//这种模块加载机制被称为CommonJS规范。
//在这个规范下，每一个.js文件都是一个模块，他们内部各自使用的变量名和函数名都互不冲突，例如05和06都声明了全局变量var s = ...;但互不影响




//一个模块想要对外暴露变量(函数也是变量)，可以用module.exports = variable;
//输出的变量可以是任意对象、函数、数组等等；
//一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就可以拿到引用模块的的变量；
//引入的变量具体是什么，取决于引入模块输出的变量；
