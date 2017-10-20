var events=require('events');

//1.实例化event
var eventEmitter=new events.EventEmitter();

//2.事件执行函数
var eventOnHandler=function(cont){
    console.log('执行['+cont+']次！');
}

//3.绑定事件
eventEmitter.on('eventon',eventOnHandler);

//4.为指定事件添加一个监听器到监听器数组的尾部。
eventEmitter.addListener('eventon',eventOnHandler);
eventEmitter.addListener('eventon',eventOnHandler);

//.返回指定事件的监听器数组。
var listeners=eventEmitter.listeners('eventon');
console.log(listeners);
console.log(events.EventEmitter.listenerCount(eventEmitter,'eventon'));

//移除绑定的一个事件【即使绑定多个相同的事件，也只会删除一个】
eventEmitter.removeListener('eventon',eventOnHandler);
console.log(events.EventEmitter.listenerCount(eventEmitter,'eventon'));

//触发事件【1：为参数】
eventEmitter.emit('eventon',1);

// var errorHandler=function errorFun(err,data){
//     console.log('this is err message:'+err);
// }
// eventEmitter.on('error',errorHandler);
eventEmitter.emit('error');


