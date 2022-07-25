const fs = require('fs');
//console.log(fs)
 fs.readFile('./hello.txt','utf-8',function(error,data){
    console.log(error)
 })
 console.log(1)
 console.log(2)
 setTimeout(()=>{
    console.log(3)
 },2000);
 console.log(4)
 console.log(5)