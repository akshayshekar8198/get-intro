//getter and setter

class huuman {
    constructor(name){
        this._name =  name;
    }
    get name( ){
        return this._name;
    }
    
    set name (newname) {
        return this._name = newname
    }
}
const om = new huuman('om')
om.name="akshay"
console.log(om._name)
console.log(om.name)

//palindron 
function panli(str){
    const len = string.length 
}

for (let i= 0; i < len ; i++){
    if(string[i]!== string[len -1-i]){
        console.log( "its a palindron");
    }
    else("it not a palindron")
}
console.log(panli(11211))

