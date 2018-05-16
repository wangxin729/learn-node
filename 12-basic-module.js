

//基本模块



//因为Node.js是运行在服务区端的js环境，服务器程序和浏览器程序相比，最大的特点是没有浏览器的安全限制了，而且服务器程序必须能接收网络请求，读写文件，处理二进制内容，所以，Node.js内置的常用模块就是为了实现基本的服务器功能。这些模块在浏览器环境中是无法执行的，因为它们的底层代码是用C/C++在Node.js环境中实现的。



//global
//js中，有且仅有一个全局对象,在浏览器中叫window对象；
//node.js中，也有唯一的全局对象global,属性和方法与window的不同；
//进入node交互模式，输入global回车，会输出它的属性和方法；




//global.console
//在node交互模式下输入global.console,或者直接输入console,回车之后会输出其相关的属性和方法；




//global.process/process
//process代表当前Node.js进程；
//通过process对象可以拿到许多有用的信息；
//在Node交互模式下执行下列语句，会输出相应的信息：
//process===global.process      //输出true
//process.vision      //输出'v8.9.3'    node.js的版本
//process.platform    //输出'win32'     当前系统平台
//process.arch       //'x64'         多少位的操作系统
//process.cwd();                    //'F:\\mywork\\练习案例\\learn-node'          返回当前工作目录
//process.chdir('F:\\mywork');    //undefined      切换当前工作目录
//process.cwd();   // 'F:\\mywork'   上一步切换的工作目录，也就是当前工作目录





//js程序是由事件驱动执行的单线程模型，Node.js也不例外；
//Node.js不断执行响应事件的js函数，直到没有任何响应事件的函数可以执行时，Node.js就退出了；
//如果想要在下一次事件响应中执行代码，可以调用process.nextTick();
//process.nextTick()  将在下一轮事件循环中调用 
process.nextTick(function () {
    console.log('nextTick callback');
});
console.log('nextTick was set');
//输出
// nextTick was set
// nextTick callback
//这说明传入process.nextTick()的函数不是立即执行，而是等到下一次事件循环。





//Node.js进程本身的事件就由process对象来处理。
//如果我们响应exit事件，就可以在程序即将退出时执行某个回调函数
//命令行执行该语句node 12-basic-module.js，在js文件执行结束前触发exit事件，然后执行回调
//code如果是0表示成功退出，如果是非0那么表示非正常退出;
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});




//判断js的执行环境
//有很多js代码既可以在浏览器中执行，也可以在node环境中执行
//但有些时候，程序本身需要判断自己到底是在什么环境下执行的
//常用的方式就是根据浏览器和Node环境提供的全局变量名称来判断
if (typeof(window)==='undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}



//该页面所有代码的正确输出顺序
// nextTick was set
// node.js
// nextTick callback
// about to exit with code: 0


