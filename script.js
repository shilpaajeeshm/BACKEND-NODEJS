var path=require("path");
var fs=require("fs")
fs.writeFile(path.join(__dirname,"/api","text.txt"),"username:shilpa",(err)=>{
    if(err) throw err
})