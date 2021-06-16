var path=require("path");
var fs=require("fs")
var user="shilpa"
fs.readFile(path.join(__dirname,"/api","text.txt"),"utf8",(err,data)=>{
    if(err) throw err
    console.log(data);
})