//import constants,{PORT} from './constract.js';
 const PORT = 1234
var http = require('http');
const server = http.createServer((req, resp)=>{
    console.log(req.url);
    if(req.url === '/phone'){
        resp.setHeader('Content-Type','application/json');
        resp.end(JSON.stringify(constants));
    }
   // resp.setHeader('content-type','application/json');
   // resp.end(JSON.stringify(constants));

   resp.end('<h1>Some text content</h1>')
});

server.listen(PORT, ()=>{
    console.log(`listening to : http://localhost:${1234}}`)
});