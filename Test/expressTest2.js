var express=require('express');
var app=express();

app.use(express.static('content'));
app.use(express.static('src'));

//1.GET 方法
/*F5调试可通过，在使用终端【node】启动，
无法找到process_get地址?
F5调试时地址为绝对目录地址即：__dirname+'//content//src//'+'index.htm'
*/
app.get('/index.htm',function(req,res){
    console.log(__dirname+'//content//src//'+'index.htm');
    res.sendFile(__dirname+'//content//src//'+'index.htm');
})
// app.get('/process_get',function(req,res){
//     //输出JSON格式
//     var response={
//         "first_name":req.query.first_name,
//         "last_name":req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })


//2.POST方法
var bodyParser=require('body-parser');

//创建 application/x-www-form-urlencoded 编码解析
//var urlencodeParser=bodyParser.urlencoded({extended:false});

// app.post('/process_post',urlencodeParser,function(req,res)
// {
//     var response={
//         "first_name":req.body.first_name,
//         "last_name":req.body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })

//3.文件上传
var fs=require('fs');
var multer=require('multer');
app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array('image'));

app.post('/file_upload',function(req,res){
    console.log(req.files[0]);//上传的文件信息
    var des_file=__dirname+'//content//files//'+req.files[0].originalname;
    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(des_file,data,function(err){
            if(err){
                console.log(err);
            }else{
                response={
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        })
    })
})

var server=app.listen(8081,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log('应用实例，访问地址为 http://%s:%s', host, port);
})