// 引入模块
var http = require('http');

var fs = require('fs');

var ws = require('socket.io');

var server = http.createServer(function (req, res) {

    // Sync同步
    var html = fs.readFileSync('./client.html');

    res.end(html);

}).listen(1998);

var io = ws(server);

io.on('connection', function (socket) {

    // fashengzaiyonghu链接io服务器的时候

    console.log('new user come in');

    socket.on('message', function (obj) {
        console.log(obj);

        io.emit('message', obj)
    });

});