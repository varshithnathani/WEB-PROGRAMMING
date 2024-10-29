// Arrays in js
// Declare and access elements in an array

const subjects = ["java","SQL","HTML","CSS"];
// local space
{
    const subjects = ["maths","physics"];
    console.log(subjects[0]);
}

console.log(subjects[0]);

const newsubjects = [];
newsubjects[0] = "CJ";
newsubjects[1]= "Adv.Java";

console.log(subjects);
console.log(newsubjects);

// declaration of array using new keyword
const names = new Array("varshith","Ishwar","Anjali","Ashok");
console.log(names);


// how to print elements in an array
for(let x of names){
    console.log(x);
}

// for in --> it will take the reference numbers
for(let x in names){
    console.log(names[x]);
}

// simple for loop
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

// Data type of an array --> Object
console.log(typeof names);


// to check the data is an array
if(names instanceof Array){
    console.log("This is an array");
}else{
    console.log("This is not an array");
}

if(Array.isArray(names)){
    console.log("names is array");
}else{
    console.log("names os not an array");
}


// An array can contain other objects
// an element inside an array can contains arrays
// function or objects


const test = ["t1","t2","t3"];
const alphatests = ["javatest", test];
console.log(alphatests);