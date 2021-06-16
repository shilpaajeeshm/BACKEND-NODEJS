var path=require("path");
var fs=require("fs")
fs.rmdir(path.join(__dirname,"/api/api/text.txt"),{recursive:true},(err)=>{
    if(err) throw err
})