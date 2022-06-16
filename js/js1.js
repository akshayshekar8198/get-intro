//assignment
var year = 2022
console.log('assignment =', year)

var x = 5;
var y = 10;

x += y ;//x = x +y;
console.log('x+=',x);


x -= y ;//x= x - y;
console.log('x-=',x) ;


x*=y; //x=x*y;
console.log('x*=',x);

x /=y; //x=x/y;
console.log('x/=',x);

x %=y; //x=x%y;
console.log('x%=',x);

x **=y; //x=x**y;
console.log('x**=',x);







//arithmetic
//addidion
var sum =5 + 6;
console.log('sum=',sum)

//substraction
var sub =5 - 6;
console.log('sub=',sub)
//multiplication
var mul =5 * 6;
console.log('mul=',mul)
//division  ''/' this s fr qutient 
var div =5 / 6;
console.log('div',div)

var mod =5 % 6;
console.log('mod',mod)

var expo =5 ** 6;
console.log('expo',expo)

//increment 
console.log('year before inc',year);
var postinc = year++;
var preinc = ++year;
console.log('postinc',postinc);
console.log('preinc',preinc);
console.log('year after inc', year);

//decrement 

console.log('year before dec',year);
var postdec = year++;
var predec = ++year;
console.log('postdec',postdec);
console.log('predec',predec);
console.log('year after dec', year);

var age =17;

console.log('==',18==age);

console.log('===',18===age);

console.log('!=',18!=age);

console.log('!==',18!==age);

console.log('>=',18>=age);

console.log('<=',18<=age);


console.log(
    age<18 ? 'yes':'no'
)

if(age < 18) {
  console.log('your are not allowed');
}
else if(age==18) {
    console.log('you are just allowed');
}
else{
    console.log('you are allowed' )

}

//logical operator
console.log(
    (age == 18 && year == 2020) ? "you are 2020": "not in 2020"
)

console.log(
    (age === 18 || year ===2020) ? "your are in 2020 " :"not in 2020" 
    )