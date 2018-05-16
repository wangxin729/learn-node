


//module.exports  ----VS----exports
//在node环境中，有两种方法可以在一个模块中输出变量  



//第一种    对module.exports赋值
function hello1() {
    console.log('hello1,World!');
}
function greet1(name) {
    console.log('Hello1' + ',' + name + '!');
}
module.exports = {
    hello1: hello1,
    greet1: greet1
}




//第二种     直接使用exports
function hello2() {
    console.log('hello2,World!');
}
function greet2(name) {
    console.log('Hello2' + ',' + name + '!');
}
exports.hello2 = hello2;
exports.greet2 = greet2;
//但是你不可以直接对exports赋值
//比如
// exports = {
//     hello: hello,
//     greet: greet
// }
//上面代码可以执行，但是模块不会输出任何变量