function sumSub(a,b){
    var sum = a+b;
    var sub = a-b;

   // return[ sum, sub];
   return {
    addition : sum ,
    substraction: sub,
   }

}
//var result = sumSub(10,5);

console.log(sumSub(10,5))