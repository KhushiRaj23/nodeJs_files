var http=require('http');
var server = http.createServer(function(req,res){   //req=request ,res= respond
    if(req.url=='/'){
        res.write('welcome to index page');
        res.end();
    }else if(req.url=='/emp'){
        res.write('welcome to employee page');
        res.end();
    }else if(req.url=="/admin"){
        res.write('welcome to admin page');
        res.end();
    }else if(req.url=="/std"){
        res.write('welcome to student page');
        res.end();
    }
    else res.end('invalid request!');
});
server.listen(2020);
console.log('server is running at port 2020');