//template literal
 const name = "akshay"

 const greethello = `hello,${name}`
 console.log(greethello)

 console.log("hello akshay")
 console.log("hello akki")
 console.log("hello ashiq")

 const a =50;
 const b = 2;
 const c = 20;



 console.log(`sum of ${a} and ${b} is ${a+b}`)

 const str = `sub of ${a} and ${c} is ${a-b}`
  console.log(str)
      
 //tag function
 function convertToUpperTagfun(littral,...values){
   console.log('static string ',littral)
   console.log('dynamic value',values)
   let output ="";
   for (i = 0; i<littral.length ;i++){
    output += littral[i];
    if(i< values.length){
        output += values[i];
    }
   }
    return output.toLocaleUpperCase;
 }
let firstname = "akshay"
let lastname = "sh"
let company = " company" 
let place = " earth "
let result = convertToUpperTagfun `Hello, ${firstname} ${lastname} this is ${company} of ${place}`;

console.log(result)

//new string method ( include ,repeat ,star)
const strr ="this is akshay from udupi"+'\n';
console.log(strr.includes("akshay",3));

console.log(strr.repeat(2+4))

console.log(strr.startsWith("this"))

console.log(strr.split(''))

console.log(strr.endsWith("akshay"))

//arrrow function or fatt arrow

//es5
var multiply = function (p1,p2){
    return p1*p2;

}
console.log (multiply(2,4))

//es6
const multi = (p1, p2) =>{ 
   p1= p1**2 ;
   p2 =p2**4;
   return p1*p2 ;
}
console.log((multi(2,3)))

const square = p => p**2;
console.log(square(2));


const conf = n => ({name: n})
console.log(conf("akshay"))




