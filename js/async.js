function task(){
    return new Promise(function(res,rej){
    setTimeout(()=>{
        res('done');
    },5000);
   });
}
// task()
//     .then(res => console.log(res));



    function task2(){
        return new Promise(function(res,rej){
        setTimeout(()=>{
            res('done2');
        },2000);
       });
    }
    



        function task3(){
            return new Promise(function(res,rej){
            setTimeout(()=>{
                rej('done 3');
            },1000);
           });
        }
         
//console.log('random content')

//asnyc/ await
async function  runtask(){
    try{
        const data = await  task();
        console.log(data)
    const data2 = await  task2();
    console.log(data2)
    const data3 = await  task3();
    console.log(data3)
    console.log('task done')

    } catch (error){
        console.log(error)
    }
    
}
 runtask();
console.log('randon content')