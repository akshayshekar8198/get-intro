const e = require("express");

function info(){
   // console.log('info')
}

function mainfunc(n,i){
  //  console.log('mainfunc')
    if (n>5){
        i();
    }else {
        return 'no response'
    }
}
mainfunc(10,info)


//promiss
const p = new Promise(function(resolve,reject ){
  //  console.log(typeof resolve)
  setTimeout(()=>{
    resolve ('Akshay')
        },4000);
  setTimeout(()=>{
    resolve (3)
      },5000);
    
});

p.then(r=>{
  //  console.log(r)
});
p.catch(e=>{
  //  console.log(e)
});
//console.log(p)


function task(){
    return new promise(function(res,rej){
    setTimeout(()=>{
        res('done');
    },5000);
   });
}

console.log(task())