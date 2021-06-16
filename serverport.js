var http=require("http");
server=http.createServer((req,res)=>{
    res.write("Our node");
    res.end();
})
const PORT=process.env.PORT||3000;
server.listen(PORT,()=>{
    console.log(`Port is running on ${PORT}`);
})
