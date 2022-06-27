var divisor = 2;
function divid(divident){
    return divident/divisor;
}
console.log(divid(10))


function update(){
    divisors =10
}
update();
console.log(divid(100))

function puredivid(divid,divi){
    return divid/divi;

}
console.log(puredivid(50,2))

console.log(puredivid(100/divisor))

var func =[];
for(var i=0; i<5; i++){

    (function(){
  var  c=i*2;
    func.push(function() {
        return console.log(c);
    })
})
}

//console.log(funtion[0]());
func.forEach(function(value){
    value() ;
})


function jobtitle(title){
    return function(prefix){
        return prefix+' '+title;
    }
}
var sales = jobtitle('salesman')
console.log(sales('top'));
console.log(sales('Useless'));

var managers = jobtitle('manager');
console.log(managers('senior'));
console.log(managers('reginal'));


function makeadder(x){
     return function(y){
        return x+y;
     }
}


var add5 = makeadder(5)
var add10 = makeadder(10)

console.log(add5(100))
console.log(add10(566))



var salaryopp =  function(salary, change){
    function changeby(amount){
        salary += amount;
    }
    return{
        raise: function(){
             changeby(change);

        },
        lower: function(){
             changeby (-change);
        },
        currentsalary : function(){
            return salary;

        }

    }
}


var akshay = salaryopp(100000,10000)
var ajay = salaryopp(1000,100)
var arun = salaryopp(100,10)


console.log('akshay',akshay.currentsalary());
console.log('ajay',ajay.lower())
console.log('arun',arun.raise());