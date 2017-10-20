buf=new Buffer("this is Chinese ha ha ha ~~","utf-8");//汉字无法输出

//汉字可以输出,会将之间的覆盖【这是啥？ese ha ha ha ~~】
//写入缓存区
var len= buf.write('这是啥？',0,10,"utf8");

console.log(len);
//从缓存区中读取
console.log(buf.toString('utf8',0));

//转换为Json对象
console.log(buf.toJSON());

