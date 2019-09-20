// 引入模板

var http = require('http');

var fs = require('fs');

var ws = require('socket.io');

var server = http.createServer(function (req, res) {
    var html = fs.readFileSync('./client.html');

    res.end(html);

}).listen(3000);

var io = ws(server);

io.on('connection',function (socket) {

    console.log('有新用户进入啦');

    socket.on('message',function (obj) {
        console.log(obj);

        io.emit('message',obj)
    });
});