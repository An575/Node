//1.阻塞代码
//var fs=require('fs');
// var data=fs.readFileSync('./Test/说明.txt');
// console.log(data);
// console.log("程序执行结束！");

//2.非阻塞代码
// fs.readFile('./Test/说明.txt',function(err,data){
//     if(err)return console.error(err);
//     console.log(data.toString());
// });
// console.log("程序执行结束！");

//3.事件循环|事件处理
// //--引入events模块
// var events=require('events');
// //--创建eventEmitter对象
// var eventEmitter=new events.EventEmitter();
// //--创建事件处理程序
// var connectHandler=function connected(){
// console.log('链接成功！');
// //--触发 data_received 事件
// eventEmitter.emit('data_received');
// }
// //--绑定 connected 事件处理程序
// eventEmitter.on('connected',connectHandler);
// eventEmitter.on('data_received',function name(params) {
// console.log('数据接收成功！');    
// });
// //触发 connected 事件
// eventEmitter.emit('connected');
// console.log('程序执行完毕！');
