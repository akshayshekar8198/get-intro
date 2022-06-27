function person (fname){
    this.firstname = fname;
}
 var personone = new person('akshay')
 console.log( personone)
 var persontwo = new person('akki')
 console.log( persontwo);


//for array format 
 //var obj = [];
 for (var i= 0;i<10;i++){
    var obj = new person('person'+(i+1));
    obj.push(new person('person'+(i+1)))
    console.log(obj)
    console.log(obj[2])
 }