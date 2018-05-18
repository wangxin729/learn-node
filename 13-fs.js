


//Node.js内置的fs模块就是文件系统模块，负责读写文件。
//和所有其他js模块不同的是，fs模块同时提供了同步和异步的方法。



//IO  输入/输出    计算机用语
//js是单线程模型，执行异步IO操作时，js代码无需等待，而是传入回调函数后，继续执行后续js代码。比如jq提供的getJSON()操作：
// $.getJSON('http://example.com/ajax', function (data) {
//     console.log('IO结果返回后执行....');
// });
// console.log('不等待IO结果直接执行后续代码');
//而同步的IO操作则需要等待函数返回
//根据网络耗时，函数将执行几十毫秒、几秒不等
// var data = $.getJSONSync('http://example.com/ajax');
//同步操作的好处是代码简单，缺点是程序将等待IO操作，在等待时间内，无法响应其他任何事情。
//而异步读取不用等待IO操作，但代码比较麻烦。




//异步读文件



//按照js标准，异步读取一个文本文件的代码如下：
/* 'use strict';
var fs = require('fs');
fs.readFile('13-sample.txt', 'utf-8', function (err,data) {
    if (err) {
        //如果没有这个文件的话，会报错  Error: ENOENT: no such file or directory, open 'F:\mywork\练习案例\learn-node\13-sample.txt'
        console.log(err);   
    } else {
        //输出txt文件里写的内容
        console.log(data);
    }
}); */
//请注意13-sample.txt文件必须在当前目录下，且编码为utf-8
//异步读取时，传入的回调接收两个参数。
//当正数读取时，err参数为null，data参数为读取到的String。
//当读取发生错误时，err参数代表一个错误对象，data为undefined。
//这也是node.js标准的回调函数：第一个参数代表错误信息，第二个参数代表接过。
//由于err是否为null就是判断是否出错的标志，所以通常的判断逻辑总是：
// if (err) {
//     //出错了
// } else {
//     //正常
// }




//读取二进制文件，下面例子演示如何读取一个图片文件：
/*
'use strict';
var fs = require('fs');
fs.readFile('13-sample.png', function (err, data) {
    if (err) {
        //如果图片不存在会报错  Error: ENOENT: no such file or directory, open 'F:\mywork\练习案例\learn-node\13-sample.png'
        console.log(err);
    } else {
        console.log('1-------读取到的二进制文件')
        console.log(data);
        //在VSCode的调试环境下data输出         Buffer(21469) [137, 80, 78, 71, 13, 10, 26, 10, …]
        //在命令行模式下输出<Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 6d 00 00 00 68 08 02 00 00 00 74 57 e9 b2 00 00 20 00 49 44 41 54 78 01 ed bd 77 98 25 67 75 ... >
        console.log('2-------Buffer转String')
        var text = data.toString('utf-8');
        console.log(text);
        //输出一堆字符串
        console.log('3-------String转Buffer')
        var buf = Buffer.from(text, 'utf-8');
        console.log(buf); 
        //使用VSCode调试没有输出
        //node直接运行该js文件输出    <Buffer ef bf bd 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 6d 00 00 00 68 08 02 00 00 00 74 57 ef bf bd 00 00 20 00 49 44 41 54 78 01 ef bf bd 77 ... >
        console.log('4-------输出数量')
        console.log(data.length + ' bytes');
        //输出   21469 bytes
    }
});
*/
//当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。
//在Node.js中，Buffer对象就是一个包含零个或者任意个字节的数组(注意和Array不同)。
//Buffer对象可以和String做转换
//Buffer --->  String   写到上面代码中
/* 
var text = data.toString('utf-8');
console.log(text);
 */
//把一个String转换成Buffer:   写到上面代码中
/* 
var buf = Buffer.from(text, 'utf-8');
console.log(buf); 
*/



//同步读文件



//除了标准的异步读取模式外，fs也提供相应的同步读取函数。
//同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。



//用fs模块同步读取一个文本文件的代码如下：
'use strict';
var fs = require('fs');
var data = fs.readFileSync('13-sample.txt','utf-8');
console.log(data);
