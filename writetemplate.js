var path=require("path");
var fs=require("fs")
var user="john"
fs.writeFile(path.join(__dirname,"/api","text.txt"),`user name:${user}`,(err)=>{
    if(err) throw err
})