// 引入一个模块
var http = require('http');
// 引入文件系统模块
var fs = require('fs');
// 引入socketio模块
var ws = require('socket.io');

var server = http.createServer(function (req, res) {
    // 调用fs模块同步读文件的方法
    var html = fs.readFileSync('./client.html');
    res.end(html);
}).listen(1998);    // 监听端口
// http服务与ws服务进行相关联，返回io服务实例对象
var io = ws(server);
io.on('connection', function (socket) {
// 发生在用户链接io端口的时候
    console.log('new user come in');
    socket.on('message',function (obj) {
        console.log(obj);
        io.emit('message', obj)
    })
});