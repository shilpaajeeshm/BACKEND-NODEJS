var http=require("http");
server=http.createServer((req,res)=>{
    res.write("Our node");
    res.end();
})
server.listen(3000,(err)=>{
    if(err) throw err
    console.log("success");
})
