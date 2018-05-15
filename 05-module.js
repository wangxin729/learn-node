
// 模块
//试一下VSCode使用git


//为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里。
//这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。


//在Node环境中，一个.js文件就称之为一个模块。


// 使用模块的好处
//大大提高了代码的可维护性
//代码可复用(其他地方直接引用，或者引用node内置模块和来自第三方的模块)
//避免函数名和变量名冲突


//我们的05-module.js文件就是一个模块，模块的名字就是文件名(去掉.js)，即05-module


//编写我们本文件的代码，使用module.exports

'use strict'

var s = 'Hello';

function greet(name) {
    console.log(s + ',' + name + '!');
}

module.exports = greet;


//函数greet()是我们在05-module模块中定义的
//module.exports = greet,它的含义就是把函数greet作为模块的输出暴露出去，这样其他模块就可以使用greet函数了



//其他模块如何使用该模块的greet函数，我们再新建一个06-use-module.js来使用
