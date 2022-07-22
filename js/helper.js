//const http = require('http');
//import constants  from './constract';
//console.log (constants)
//import someName from './constract.js'
//import * as constant from './constract.js'
//const constants = require ('./constract')
//console.log (constant)
// console.log(PORT)
// console.log( most)

//import constract from "./constract";
// import sum from './constract.js'
// console.log(sum)
//console.log(sub)
import {PORT} from './constract.js'
const http = require('http');
const server = http.createServer((req,resp)=>{
resp.end('request compleated for '+req.url);
});

server.listen(PORT,()=>{
    console.log('listing to http://localhost:3000')
}
)