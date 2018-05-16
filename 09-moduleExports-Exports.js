


//module.exports  ----VS----exports
//在node环境中，有两种方法可以在一个模块中输出变量  



//第一种    对module.exports赋值
/*
function hello() {
    console.log('hello,World11111111111!');
}
function greet(name) {
    console.log('Hello' + ',' + name + '!');
}
module.exports = {
    hello: hello,
    greet: greet
}
*/



//第二种     直接使用exports
function hello() {
    console.log('hello,World2222222222222222!');
}
function greet(name) {
    console.log('Hello' + ',' + name + '!');
}
exports.hello = hello;
exports.greet = greet;
//但是你不可以直接对exports赋值
//比如
// exports = {
//     hello: hello,
//     greet: greet
// }
//上面代码可以执行，但是模块不会输出任何变量