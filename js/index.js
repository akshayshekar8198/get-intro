// console.log("testing node js")

// console.log(abc);
// var abc = 12;


// console.log(a)
// console.log(b)
// const a= "1";
// let b = "6"
// var abc = 10;
// var abc = 22;
// console.log(abc);

// let a = 1;
// let a = 2 ;
// console.log(a);

// const b = 3;
// const b =2;
// console.log(b)


// function run (){
//     var abc ="abc";
//      let bcd = "bcd";

//      console.log(abc,bcd);
//      {
//         let bcd = "bcd v2"
//         let ccd = "cdd"
//         console.log(bcd);
//         console.log(ccd)
//      }
//      console.log(ccd)
// }
// run();

//destructuring

const person = {};
const person2 ={};
person.name="akshay"
person2.name="akki"
//console.log(person,person2)
person.gender="male";
person2.gender="female";
console.log(person,person2)

const { name, gender } = person2 ;
 console.log('name ===>',name);
 console.log('gender ===',gender)