var path=require("path");
console.log(path.parse(__dirname,"/api","join.js"),{},(err)=>{
    if(err) throw err
});