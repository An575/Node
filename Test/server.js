 var http=require('http');

// http.createServer(function (request,response) {
//     //发送HTTP头部
//     //HTTP状态值 200 OK
//     //内容类型:text/plain
//     response.writeHead(200,{'Content-Type':'text/plain'});

//     //发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);

// console.log('Server running at http://127.0.0.1:8888/');

var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(8000);