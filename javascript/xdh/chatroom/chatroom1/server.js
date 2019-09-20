// 引入模块

var http = require('http');

// 引入 文件 系统模块

var fs = require('fs');

// 引入socket.io模块、

var ws = require("socket.io");

var server = http.createServer(function (req, res) {

    // 调用fs模块中的同步读文件方法
    var html = fs.readFileSync('./client.html');

    res.end(html);

}).listen(3000);    // 监听端口


// Http服务与ws服务相关联 返回io服务实例
var io = ws(server);

io.on('connection', function (socket) {

    // 发生在用户连接io服务器的时候
    console.log('有新用户进入');

    // 接受到客户端的消息
    socket.on('message', function (obj) {

        console.log(obj);

        // 发送消息给所有已经链接的客户端 广播
        io.emit('message',obj)

    });

});