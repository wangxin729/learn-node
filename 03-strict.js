

//在js文件的开头加上'use strict'; node在执行该js文件时会使用严格模式

//在服务器环境下，如果有多个js文件，每个文件都写上'use strict';会很麻烦

//我们可以给nodejs传递一个参数，让node直接为所有js文件开启严格模式

//  node --use_strict 03-strict.js

console.log('传参数开启严格模式')

//在编写js代码的时候，完全可以一边在文本编辑器里写代码，一边开一个node交互式命令窗口
//在写代码的过程中，把部分代码粘到命令行去验证，事半功倍
//前提是得有个超大显示屏


