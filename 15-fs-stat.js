

//如果我们要获取文件大小，创建时间等信息，可以使用fs.stat(),它返回一个Stat对象，能告诉我们文件或目录的详细信息：
//异步
/*
'use strict';
var fs = require('fs');
fs.stat('14-write.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        //打印stat对象
        console.log(stat);
        //是否是文件
        console.log('isFile:' + stat.isFile());
        //是否是目录
        console.log('isDirectory:' + stat.isDirectory());
        if (stat.isFile()) {
            //文件大小
            console.log('size:' + stat.size);
            //创建时间,Date对象
            console.log('birth time:' + stat.birthtime);
            //修改时间   Date对象
            console.log('modified time:' + stat.mtime);
        }
   }
});
*/
//输出如下
/*
Stats{
    dev: 4168733732,
    mode: 33206,
    nlink: 1,
    uid: 0,
    gid: 0,
    rdev: 0,
    blksize: undefined,
    ino: 9851624185128500,
    size: 27,
    blocks: undefined,
    atimeMs: 1526886169941.1895,
    mtimeMs: 1526889416845.3254,
    ctimeMs: 1526889416845.3254,
    birthtimeMs: 1526886169941.1895,
    atime: 2018-05-21T07:02:49.941Z,
    mtime: 2018-05-21T07:56:56.845Z,
    ctime: 2018-05-21T07:56:56.845Z,
    birthtime: 2018 - 05 - 21T07: 02: 49.941Z
}
*/
// isFile:true        
// isDirectory:false
// size:27
// birth time:Mon May 21 2018 15:02:49 GMT+0800 (中国标准时间)
// modified time:Mon May 21 2018 15:56:56 GMT+0800 (中国标准时间)




//同步
//stat()也有一个对应的同步函数statSync()
//自己试着写
'use strict';
var fs = require('fs');
try {
    var stat = fs.statSync('14-write.txt');
    //输出Stats对象
    console.log(stat);
    //是否是文件
    console.log(stat.isFile());
    //是否是目录
    console.log(stat.isDirectory());
    if (stat.isFile()) {
        //文件大小
        console.log(stat.size);
        //创建时间
        console.log(stat.birthtime);
        //修改时间
        console.log(stat.mtime);
    }
} catch(err){
    console.log(err);
}
//输出同上面的异步方法

