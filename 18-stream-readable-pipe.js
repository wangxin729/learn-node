
//pipe(英语：管，用管道输送)



//就像可以把两个水管串成一个更长的水管一样，两个流也可以串起来。
//一个Readable流和一个Writable流串起来后，所有的数据自动从Readable流进入Writable流，这种操作叫pipe。



//在Node.js中，Readable流有一个pipe()方法,就是用来干这件事的。



//让我们用pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序。
'use strict';
var fs = require('fs');
var rs = fs.createReadStream('18-read.txt');
var ws = fs.createWriteStream('18-write.txt');
// rs.pipe(ws);
//同级会产生一个18-write.txt文件，里面的内容同18-read.txt文件



//************默认情况下，当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。
//如果不希望自动关闭Writable流，需要传入参数：
//readable.pipe(writable, { end: false });


//试验：

//(1)在上段代码后直接添加
// ws.write('\n+++++++++++++++++++++++++++++++++++++++++++++++++');
//18-write.txt里  先是++++++++   再是18-read.txt里的文字

//(2)在上段代码后直接添加
// process.nextTick(function () {
//     ws.write('\n+++++++++++++++++++++++++++++++++++++++++++++++++');
// });
//18-write.txt里  先是++++++++   再是18-read.txt里的文字

//(3)在上段代码后直接添加
// setTimeout(() => {
//     ws.write('\n+++++++++++++++++++++++++++++++++++++++++++++++++');
// }, 2000);
//18-write.txt里是18-read.txt里的文字   然后2秒后报错Error: write after end

//(4)修改上段代码中的rs.pipe(ws)
rs.pipe(ws, { end: false });
setTimeout(function () {
    ws.write('\n-----------------');
    ws.write('\n++++++++++');
    ws.end();
}, 3000);
//18-write.txt里是18-read.txt里的文字   然后2秒后写入-------        ++++++++
//然后结束
//验证了******中的结论


