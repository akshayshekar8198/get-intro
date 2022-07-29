const p = new Promise((resolve,reject)=>{
    resolve('success')
    reject(' failure')

})
.then(res=>{
    setTimeout(()=>{
        console.log(res)

    }, 3000)
    
    return 'anything  meaningful which is helpfull in next then ';
})
.then(res2=>{
    console.log(res2)
})
.catch(err=>{
     console.log(err)
 }); 

