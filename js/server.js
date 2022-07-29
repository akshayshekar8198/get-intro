import express, { query } from 'express';
import { user } from './eg.js';
const app = express();

const PORT = 5011;


app.get('/',(req, res)=>{
res.send('hello world')
})

app.post('/',(res,req)=>{
    res.post({
        message:"posted successfully"
    })
})

app.get('/profile', (req,res)=>{
    res.send({
        firstName: "Akshay",
        SecondName: "Skekar",
        gender: "Male"

    })
});

app.get('/users',(req,res)=>{
    res.json(users);
})
app.get('/users/:id/abc/:type',(req,res)=>{
    console.log('query',req.query);
    console.log('params',req.params)
   const user = users.filter(
    i=>(i.id == req.params.id && i.type == req.params.type)
    );
   if(user.length){
    res.json(user[0].name)
   } else{
    res.json({
        message:'user not found'
    })
   }
    
})

// app.get('/home',(res,req)=>{
//     res.json(`./home.html`)
// })

app.listen(PORT,()=>{
    console.log(` :${PORT}`)
})

