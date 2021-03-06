//1.express 基本应用
 var express=require('express');
 var app=express();

// app.get('/',function(req,res){
//     res.send('Hello World');
// })

// var server=app.listen(8081,function(){
//     var host=server.address().address;
//     var port=server.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })

//2.通过路由提取出请求的URL以及GET/POST参数。
//  主页输出 "Hello World"
// app.get('/', function (req, res) {
//    console.log("主页 GET 请求");
//    res.send('Hello GET');
// })
 
// //  POST 请求
// app.post('/', function (req, res) {
//    console.log("主页 POST 请求");
//    res.send('Hello POST');
// })
 
// //  /del_user 页面响应
// app.get('/del_user', function (req, res) {
//    console.log("/del_user 响应 DELETE 请求");
//    res.send('删除页面');
// })
 
// //  /list_user 页面 GET 请求
// app.get('/list_user', function (req, res) {
//    console.log("/list_user GET 请求");
//    res.send('用户列表页面');
// })
 
// // 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
// app.get('/ab*cd', function(req, res) {   
//    console.log("/ab*cd GET 请求");
//    res.send('正则匹配');
// })
 
// var server = app.listen(8081, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })

//3.静态文件
app.use(express.static('content'));

app.get('/',function(req,res){
res.send('Hello World!');
})

var server=app.listen(8081,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s', host, port);
})
