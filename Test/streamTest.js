// Stream 有四种流类型：
//     Readable - 可读操作。
//     Writable - 可写操作。
//     Duplex - 可读可写操作.
//     Transform - 操作被写入数据，然后读出结果。
// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
//     data - 当有数据可读时触发。
//     end - 没有更多的数据可读时触发。
//     error - 在接收和写入过程中发生错误时触发。
//     finish - 所有数据已被写入到底层系统时触发。

//1.从流中读取数据
 var fs=require('fs');
var data='';

//创建可读流
//var readerStream=fs.createReadStream('./Test/说明.txt');
var readerStream=fs.createReadStream('说明.txt');
//设置编码
readerStream.setEncoding('UTF8');
//处理流事件
readerStream.on('data',function(chunk){
    data+=chunk;
});
readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error',function(err){
    console.log(err.stack);
})

console.log('Read End!');

//2.写入流
var writeData='这是测试数据！'
// var writeStream=fs.createWriteStream('./Test/说明.txt');
var writeStream=fs.createWriteStream('说明.txt');
//设置编码
writeStream.write(writeData,'utf8');
//标记文件末尾
writeStream.end();
//处理流事件
writeStream.on('finish',function(){
    console.log('写入完成！');
});

writeStream.on('error',function(err){
    console.error(err.stack);
})

console.log('Write End!');

//3.管道流

//4.链式流
var zlib = require('zlib');
//压缩文件
fs.createReadStream('说明.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('说明.txt.gz'));
console.log('文件压缩完成！');

//解压缩文件
fs.createReadStream('说明.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('说明_副本.txt'));
console.log('文件解压缩完成！');


