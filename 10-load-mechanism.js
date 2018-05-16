

//node的加载机制



//首先，node会将整个待加载的js文件(05-module.js),放入一个包装函数load中执行。在执行这个函数前，node准备好了module变量。
var module = {
    id: '05-module',
    exports: {}
};


//load函数最终返回的是module.exports
var load = function () {
    //05-module.js文件的内容
    //.........
    

    //load函数返回
    return module.exports;
};
var exported = load(module.exports, module);


//也就是说，默认情况下，node准备的exports变量和module变量实际上是同一个变量，并且初始化为空对象。于是，我们可以写：
exports.foo = function () { return 'foo'; };
exports.bar = function () { return 'bar'; };
//也可以写：
module.exports.foo = function () { return 'foo'; };
module.exports.bar = function () { return 'bar'; };


//换句话说，node默认给你准备了一个空对象，这样你可以直接往里面加东西。


//但是，如果我们要输出的是一个函数或者数组，那么只能给module.exports赋值：
module.exports = function () { return 'foo'; };
//给exports赋值是无效的，因为赋值后，module.exports仍然是空对象{}



/* ***结论*** */
//1.如果要输出一个键值对象{}，可以利用exports这个已存在的空对象{}，并继续在上面添加新的键值；
//2.如果要输出一个函数或者数组，必须直接对module.exports对象赋值
//所以我们可以得出结论：直接对module.exports赋值，可以应对任何情况：
module.exports = {
    foo: function () { return 'foo'; }
}
//或者
module.exports = function () { return 'foo'; };
//最终，我们强烈建议使用module.exports = xxx的方式来输出模块变量，这样，你只需要记忆一种方法。