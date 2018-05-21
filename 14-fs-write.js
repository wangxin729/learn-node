

//写文件


//异步
//将数据写入文件是通过fs.writeFile()实现的：
// 'use strict';
// var fs = require('fs');
// var data = 'Hello,World!';
// fs.writeFile('14-write.txt', data, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok !!!');
//    }
// });
//会直接在该文件的同级新建一个14-write.txt文件，里面写入了'Hello,World!';
//然后输出'ok !!!';
//writeFile()的参数名依次为文件名、数据和回调函数。
//如果传入的数据是String,默认按utf-8编码写入文本文件；
//如果传入的文件是Buffer，则写入的是二进制文件。
//回调函数由于只关心成功与否，因此只需要一个err参数。




//和readFile()类似，writeFile()也有一个同步方法，叫writeFileSync():
'use strict';
var fs = require('fs');
var data = '啊呀呀，我是同步的';
fs.writeFileSync('14-write.txt', data);
//会在14-write.txt文件中写入'啊呀呀，我是同步的'