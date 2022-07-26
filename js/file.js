const fs = require('fs')
 fs.readFile('./hello.txt','utf-8',function(error,data){
    console.log(data)
 })
 console.log(1)
 console.log(2)
 setTimeout(()=>{
    console.log(3)
 },2000);
 console.log(4)
 console.log(5)

 const b = Buffer.from('this is akshay from udupi');
 //b.write('this is akshay from udupi');
 console.log(b.toString()) 

let interval = '';

 setTimeout(function(){
    console.log('akshay the great')
    clearInterval('interval')
 },10000)

 setInterval(function(){
   // console.log('the great akshay')
 },1000)