   var fs=require('fs');
// var data=fs.readFileSync('./Test/说明.txt');
// console.log(data);
// console.log("程序执行结束！");

fs.readFile('./Test/说明.txt',function(err,data){
    if(err)return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束！");
