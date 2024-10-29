// symbol - primitive
let x = Symbol();
console.log(x);
let y = Symbol();
if(x==y){
    console.log("Symbols are same");
}else{
    console.log("Symbols are not same");
}

// Symbols can have description
let z = Symbol("id");
console.log(z.description);
let za = Symbol("id");
if(z == za){
    console.log("they are equal");
}else{
    console.log("They are not equal");
}

let mySymbol = Symbol();
const student={
    [mySymbol]:"11223344",
    address:'Martur',
    phone:"9090909090",

}
// we cannot access the symbol using for loop
for(let x in student){
    console.log(student[x]);
}
// we can access the symbol data directly
console.log(student[mySymbol]);

// we can direcly use the Symbol() in object
// but we won't be able to access the data inside the Symbol()

const faculty={
    [Symbol()]:"1234",
    address:"Amaravati",
}
console.log(faculty[Symbol()]);

// one exception where it will not geneteate a unique value
let xy = Symbol.for("id");
let xyz = Symbol.for("id");
if(xy == xyz){
    console.log("They are equal"); // in this case we will get they are equal
}
else{
    console.log("They are not equal");
}

console.log(Symbol.keyFor(xy));