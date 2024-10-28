// Datatypes in js
// number, string, boolean, null, undefined
// obj and symbols


// number 64 bit
let x = 20;
console.log(x);
x = "Hello";
console.log(x);

let b = false;
let nu = null;
if(null){
    // if use null it will return the false everytime
    console.log("it is true");

}else{
    console.log("It is false");
}

// undefined
let a;
console.log(a);

if(a == undefined){
    console.log("assign a value");
}else{
    console.log("Its defined");
}

// To check the datatype of a variable we use typeof
console.log(typeof a);
console.log(typeof x);

// Obj is a data type
// arrays, data, obj

const k =[1,2,3,4,5,6];
console.log(typeof k);

// what is an obj in js
// it is named value / key value pairs
const student ={firstname: "varshith", address: "Martur", phone:"999999999"};
console.log(student["firstname"]);
console.log(typeof student);

// Symbol
let xa = Symbol();
let ya = Symbol();
// xa is different from ya
// it will help to create a unique value 
console.log(xa);

