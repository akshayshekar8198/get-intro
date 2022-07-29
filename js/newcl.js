function pr (data){
    console.log(data);
}
function square(data){
    console.log(data*data)
}
function sum (a,b,cb){
    const s = a+b;
    console.log(s)
    if (s>5){
        cb(s)
    }
    else{
        console.log('not good')
    }
}
sum(8,3,square)
