




var express =  require('express');

 var app = express();

 app.get('/',function(req,resp){
    resp.send('<h1> welcome to my website  </h1>');
 })

app.listen(5544)



// function add (a,b){
//     return a+b;

// }
// console.log(add(2,5));




