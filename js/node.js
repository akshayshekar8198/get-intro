for (i =0; i<10; i++){
//console.log(i)
}

const iterator = {
    step: 0,
    next: function(){
        //let step =0;
        this.step++;
        switch (this.step) {
            case 1:
             return {value: this.step , done :'false'};

            case 2:
            return {value: this.step , done :'false'};

            case 3:
            return {value: this.step , done :'false'};
                
            default:
                return{ value :'undifeied', done: 'true '};
        }
    }
}

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


function makerangeiterator(start = 0 , end =infinity , step = 1){
    let nextindex =  start;
    let iterationcount = 0;
    const rangeiterator ={
        next: function(){
            let result ;
            if (nextindex< end ){
                result ={value:nextindex , done:  false}
                nextindex += step;
                iterationcount ++;
                return result ;
            }
            return {value : iterationcount , done: true}
        }
    }
    return rangeiterator
}
const it = makerangeiterator (1,10,2);
let result = it.next ();
console.log (result )
while(!result.done){
    console.log(result.value)
    result = it.next()
}


//generator function

function* akshay (start= 0, end =100 , step= 1){
    let a =0;
    for (i = start ; i< end ; i+= step){
        a++;
        yield i;
    }
}
const its = akshay(1,10,3)
console.log(its.next())
console.log(its.next())
console.log(its.next())
console.log(its.next())

function* getvalue (){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
connsole.log(a.next())//1295