var a = 2;
var b = 3;
function sum(a,b){
    return a+b;
}
console.log(sum(a,b));

function usermodel(){
    name = "usermodel";
    this.getname =function (){
        return this.name;
    }
}
var user = new usermodel();
console.log(user);


function person (name,age,height,gender){
    this.name = name;
    this.age = age;
    this.heighr = height ;
   // this.weight = weigth;
    this.gender = gender;

}
var person1 = new person('akshay','24','6/','90','male')
 console.log(person1);




 var a = {
    fname :'akshay',
    lname : 's',
    salary : function(){
        return this.fname
    }
 }
 console.log(a.salary())