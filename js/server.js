import express from 'express';
const app = express();
const PORT = 5011;

app.get('./',(req, res)=>{
res.send('hello world')
})

app.listen(PORT,()=>{
    console.log(`listening on:http://localhost:${PORT}`)
})
