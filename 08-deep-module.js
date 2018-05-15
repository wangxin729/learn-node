// 深入理解模块原理 在编写js代码时，我们可以申明全局变量 在浏览器中，大量使用全局变量不好;
// 如果你在a.js中使用了全局变量s，那么，在b.js中也使用全局变量s，将造成冲突，b.js中对s赋值会改变a.js的运行逻辑;



// 也就是说，javascript语言本身并没有一种模块机制来保证不同模块可以使用相同的变量名;


//node如何实现这一点:
// 实现'模块'这个功能，并不需要语法层面的支持 实现'模块'功能的奥妙就在于js是一种函数编程式语言，他支持闭包;
// 如果把一段js代码用一个函数包装起来，这段代码所有的'全局'变量就变成了函数内部的局部变量 ;



//在05 - module.js中，我们的代码是这样的
// var s = 'Hello';
// var name = 'world';

// console.log(s + ',' + name + '!'); //输出Hello,world!



//node.js加载了05-module.js后，它可以把代码包装一下，变成这样执行：
// (function () {
//     //读取到的05-module.js代码
//     var s = 'Hello';
//     var name = 'world';

//     console.log(s + ',' + name + '!'); //输出Hello,world!
//     //05-module.js代码结束
// })();
//这样一来，原来的全局变量s现在变成了匿名函数内部的局部变量；
//如果node.js继续加载其他模块，这些模块中的'全局'变量s也互不干扰；




//所以，node利用js的函数式编程的特性，轻而易举的实现了模块的隔离；



//模块的输出module.exports怎么实现：
//node可以先准备一个对象module
//准备module对象
// var module = {
//     id: '05-module',
//     exports: {}
// };
// var load = function (module) {
//     //读取的05-module.js代码
//     function greet(name) {
//         console.log('Hello' + ',' + name + '!');
//     }
//     module.exports = greet;
//     //05-module.js代码结束
//     return module.exports;
// };
// var exported = load(module);
// // 保存module
// save(module, exported);
//可见，变量module是node在加载js文件前准备的一个变量，并将其传入加载函数，我们在05-module.js中可以直接使用变量module原因就在于它实际上是函数的一个参数；
//module.exports = greet;
//通过把参数传递给load()函数，05-module.js就顺利把一个变量传递给了node执行环境，node会把这个module变量保存到某个地方；
//由于Node保存了所有导入的module,当我们require()获取Module时，node找到对应的Module，把这个Module的exports变量返回，这样，另一个模块就顺利拿到了模块的输出；
//var greet = require('./hello');



//以上便是node实现js模块的一个简单的原理介绍