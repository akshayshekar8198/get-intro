// var d = "akshay";
// var e = d;
// e = "anythinhgs";
// console.log(d===ture);
// console.log(d);

var tv ={
    ison: false
}
console.log(JSON.stringify(tv));
function turnOn (device){
    device.ison = true;
    device = {
        isOn: false
    };

}
turnOn (tv)
console.log(tv)

//new

function sum  (a,b){
    console.log
    return a+b;
    }
console.log(sum(2,8))

function sub  (a,b){
    return a-b;
}
function task  (c,a,b){
    return c( a,b );
}
//9845426946
console.log(task (sum,5,6));

var cars = ['volve','innova','bmw','bmw','bmw'];
console.log(cars);
function filtertask(item){
   console.log(item);
    return item === 'bmw' ;

}

console.log(cars.filter(filtertask));