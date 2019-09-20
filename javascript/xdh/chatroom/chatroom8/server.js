var http = require('http');

var fs = require('fs');

var ws = require('socket.io');

var server = http.createServer(function (request, response) {

    html = fs.readFileSync('./client.html');

    response.end(html);

}).listen(1998);

var io = ws(server);

io.on('connection', function (socket) {
    socket.on('message', function (obj) {

        io.emit('message', obj);

    });
});