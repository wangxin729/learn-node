



//stream是Node.js提供的又一个仅在服务区端可用的模块，目的是支持'流'这种数据结构;



//流是一种抽象的数据结构。



//想象水流，当在水管中流送时，就可以从某个地方（例如自来水厂）源源不断地到达另一个地方(比如你家的洗手池)。
//我们也可以把数据看成是数据流，比如你敲键盘的时候，就可以把每个字符依次连起来，看成字符流。这个流是从键盘输入到应用程序，实际上它还对应着一个名字：标准输入流(stdin)。
//如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字：标准输出流(stdout)。
//流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。



//有些流用来读取数据，比如从文件读取数据时，可以打开一个文件流，然后从文件流中不断地读取数据。
//有些流用来写入数据，比如向文件写入数据时，只需要把数据不断地往文件流中写进去就可以了。



//在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了：
//data事件表示流的数据已经可以读取了
//end事件表示这个流已经到末尾了，没有数据可以读取了
//error事件表示出错了



//下面是一个从文件流读取文本内容的示例:
/*
'use strict';
var fs = require('fs');
//打开一个流
var rs = fs.createReadStream('17-stream.txt', 'utf-8');
//响应上述的三个事件
//事件流中的数据可以读取了
rs.on('data', function (chunk) {
    console.log('DATA');          //DATA
    console.log(chunk);           //事件流啊  事件流   是个傻子吗
});
//这个流已经到末尾了，没有数据可以读取了
rs.on('end', function () {
    console.log('END');           //END
});
//出错了
rs.on('error', function (err) {
    console.log('ERROE');       //ERROE
    console.log(err);      //如果没有该文件  输出  Error: ENOENT: no such file or directory, open 'F:\mywork\练习案例\learn-node\17-stream.txt'
});
*/
//要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。




//要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束；
'use strict';
var fs = require('fs');
//写入文本文件,文本文件的编码类型是utf-8
var ws1 = fs.createWriteStream('17-output1.txt', 'utf-8');
ws1.write('我是使用Stream被写进来的文本数据......\n');
ws1.write('我再写进来一条......\n');
ws1.write('END');
ws1.end();
//会在该文件的同级生成一个17-output1.txt，并写入相关的内容；
//写入二进制数据
var ws2 = fs.createWriteStream('17-output2.txt');
//除了读取文件可以得到Buffer的实例外，还能直接构造new Buffer()
//new Buffer('hahah','utf-8');
//上句代码的意思就是：将字符串转换为指定编码下的二进制数据
ws2.write(new Buffer('我是使用stream写进来的二进制数据......\n','utf-8'));
ws2.write(new Buffer('啊呀呀，我再写一行......\n','utf-8'));
ws2.write(new Buffer('END','utf-8'));
ws2.end();




//所有可以读取数据的流都继承自stream.Readable
//所有可以写入的流都继承自stream.Writable
//***********读完这句话不是很理解它的意思
//***********查阅文档有了以下理解
//util是一个Node核心模块，提供常用函数的集合
//util.inherits(constructor,superConstructor)是一个实现对象间原型继承的函数
//例如
//util.inherits(Sub, Base);    //使用之前先引入util模块
//基础对象为Base    Sub继承自Base
//*****Sub仅仅会继承Base在原型上定义的函数，在Base内部创造的属性和函数都不会被继承。
//******打印Sub的实例(new Sub()),原型中定义的属性和函数不会作为该实例的属性和方法输出
//所以可以有以下写法
//第一步：继承Readable流的功能(使用前得引入util,stream)
// util.inherits(MyReadableStream, stream.Readable);
//第二步：创建对象调用实例
// stream.Readable.call(this, opt);
//在构造函数MyReadableStream里执行第二步中的语句，opt为构造函数的形参
//然后MyReadableStream的实例就是一个读取数据的流
//stream.Writable的用法同stream.Readable









