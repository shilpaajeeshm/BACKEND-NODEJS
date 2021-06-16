var path=require("path");
var fs=require("fs")
const EventEmitter=require("events");
const emitter= new EventEmitter();
emitter.on("message",(data)=>{
    console.log(data);
})
emitter.emit("message","user login");
emitter.emit("message","user logout");