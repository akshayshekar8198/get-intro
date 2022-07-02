//how es6 is different from es5
let person ={
    name : "akshay",
    thisisarrow: ( )=> {
        this.name="ak"
        console.log(`my name is ${this.name}`);
    },
    thisisregular() {
        console.log(`this name is ${this.name}`)
    }
}
console.log(person.thisisarrow());
console.log(person)


const sum = (a, b)=> a*b;
const s = new sum() // this doesnt work in es6 
console.log(sum(2,4)) 