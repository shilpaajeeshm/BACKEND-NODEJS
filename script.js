var path=require("path");
var fs=require("fs");
var http=require("http");
http.createServer((req,res)=>{
    if (req.url=="/"){
     fs.readFile(path.join(__dirname,"views","index.html"),"utf8",(err,data)=>{
        if (err) throw err
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(data);
        console.log(req.url);
    })}
    if (req.url=="/about"){
        fs.readFile(path.join(__dirname,"views","about.html"),"utf8",(err,data)=>{
           if (err) throw err
           res.writeHead(200,{"Content-Type":"text/html"})
           res.end(data);
           console.log(req.url);
       })}
   

}).listen(3000,()=>{
    console.log("success");
})
