var path=require("path");
var fs=require("fs")
fs.mkdir(path.join(__dirname,"/api/api/text.txt"),{},(err)=>{
    if(err) throw err
})