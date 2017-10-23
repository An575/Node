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

//4.自定义模块
// var Hello=require('../moduleJs/hellomodule');
// Hello.world();

// var hello=new Hello();
// hello.setName('An');
// hello.sayName();
//5.全局变量
//__filename 表示当前正在执行的脚本的文件名
//console.log(__filename);
//__dirname 表示当前执行脚本所在的目录。
//console.log(__dirname);

//6.退出事件
// process.on('exit',function(code){
//     setTimeout(function(){
//         console.log("该段代码不能执行！");
//     },0)
// console.log("退出码为:",code);

// });
// console.log("程序执行结束！");

//7.util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。 
 var util=require('util');
 function Base(){
     this.name="Base";
     this.base=1991;
     this.sayHello=function(){
         console.log('Hello'+this.name);
     };
 }
 //原型中定义的函数
 Base.prototype.showName=function(){
     console.log(this.name);
 }

 function Sub(){
     this.name="sub"
 }
 util.inherits(Sub,Base);
 var objBase=new Base();
 objBase.showName();
 objBase.sayHello();
 console.log(objBase);

 var objSub=new Sub();
 objSub.showName();
 //objSub.sayHello();//错误，无法继承构造函数内的属性及函数
console.log(util.inspect(objSub));
 console.log(objSub);
