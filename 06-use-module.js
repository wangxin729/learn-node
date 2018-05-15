


'use strict';

// 引入05-module模块
var greet = require('./05-module');

var s = 'WangXin';

greet(s);           //输出Hello,WangXin!


//引入模块用的是Node提供的require函数


//引入的模块作为变量保存在greet变量中，其实它就是05-module.js中输出的greet函数



//在使用require引入模块的时候，请注意模块的相对路径
//因为05-module.js和06-use-module.js位于同一个目录，所以我们使用了当前目录'.'



//如果只写模块名，比如var greet = require('05-module);
//则Node会依次在内置模块、全局模块和当前模块下查找05-module.js,很有可能会报错



//如果遇到Error: Cannot find module 'hello'
//得检查
//模块名是否写对
//模块文件是否存在
//相对路径是否写对了


