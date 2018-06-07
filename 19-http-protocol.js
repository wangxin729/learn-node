

//HTTP协议


//要理解Web服务器程序的工作原理，首先，我们要对HTTP协议有基本的了解。


//在Web应用中，服务器把网页传给浏览器，实际上就是把html代码发送给浏览器，让浏览器显示出来。而浏览器和服务器之间的传输协议是HTTP,所以：
//html是一种用来定义网页的文本，会html，就可以编写网页；
//http是在网络上传输html的协议，用于浏览器和服务器之间的通信；


//谷歌浏览器提供了一套完整的调试工具，非常适合web开发；
//右上角菜单-->更多工具--> 开发者工具        F12       鼠标右键-->检查
//Elements显示网页的结构
//Network显示浏览器和服务器的通信。单击Network,确保第一个小红灯亮着，谷歌就会记录所有浏览器和服务器之间的通信；


//当我们在地址栏输入www.sina.com.cn(某一个网站的地址)时，浏览器将会显示新浪的首页；
//在这个过程中，浏览器都干了些什么事情呢？通过Network的记录，我们就可以知道。
//在Network中，定位到第一条记录，点击，右侧将显示Request Headers,点击其右侧的view source,我们就可以看到浏览器发给新浪服务器的请求；
//例如  GET /api/hotword.json HTTP/1.1
//      Host: www.sina.com.cn


//最主要的就是头两行，分析一下：

//GET 表示一个读取请求，将从服务器获得网页数据，/表示URL的路径，URL总是以/开头，/就表示首页,最后的HTTP/1.1指示采用的HTTP协议的版本是1.1。目前HTTP协议的版本就是1.1，但是大部分服务器也支持1.0版本，主要区别在于1.1版本允许多个http请求复用一个TCP连接，以加快传输速度。

//从第二行开始，每一行都类似于Xxx:abcdefg:
// Host:
//表示请求的域名是www.sina.com.cn。如果一台服务器有多个网站，服务器就需要通过Host来区分浏览器请求的是哪个网站。


//继续往下，找到Response Headers,点击view source,显示服务器返回的原始响应数据。
//HTTP/1.1  200  OK
//Content-Type: text/html
//Content-Length： 436
//HTTP响应分为Header和Body两部分，Body是可选项，我们在Network中看到的Header最重要的几行如下：

//  200  OK
//200表示一个成功的响应，后面的OK是说明。
//失败的响应有404 Not Found: 网页不存在
// 500 Internal Server Error: 服务器内部出错等等。

//Content-Type: text/html
//Content-Type指示响应的内容，这里是text/html表示HTML网页。
//请注意，浏览器是通过Content-Type来判断响应的内容是网页还是图片，是视频还是音乐。
//浏览器并不靠URL来判断响应的内容，所以，即使URL是http://example.com/abc.jpg,他也不一定就是图片。


//HTTP响应的Body就是HTML源码
//鼠标右键-->查看网页源码
//就可以直接在浏览器中查看HTML源码
//当浏览器读取到新浪首页的HTML源码后，它会解析HTML、显示页面，然后，根据HTML里的各种链接，再发送HTTP请求给新浪服务器，拿到相应的图片、视频、Flash、javascript脚本、CSS等各种资源，最后显示出一个完整的页面。
//所以我们在Network下面能看到很多额外的HTTP请求。


