function sum(a,b){
    return a+b;
}
console.log(sum(20,10));





var diff=function(a,b){
    return a-b;
}
function pqr(m){
    console.log(m(10,20));
}
pqr(diff)




function sdf(w,x,y,z){
    console.log(w(20,30))
    console.log(x(5,20))
    console.log(y(20,10))
    console.log(z(10,5))
}sdf(function(a,b){
    return a+b;
}, function(a,b){
    return a*b;
}, function(a,b){
    return a-b;
}, function(a,b){
    return a/b;
})
